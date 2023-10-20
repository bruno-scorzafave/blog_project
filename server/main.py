import os
import sys
import dotenv
import stytch

from flask import Flask, render_template, request, make_response, redirect
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from Classes.User import User
from Classes.Forms import RegisterOrLoginForm, EditUser
# TODO: remove this import
from stytch.consumer.models.users import Name

dotenv.load_dotenv()

# TODO: pass configs to different files
# mongo config
MONGO_DB_USER = os.getenv("MONGO_DB_USER")
MONGO_DB_PASSWORD = os.getenv("MONGO_DB_PASSWORD")
uri = f"mongodb+srv://{MONGO_DB_USER}:{MONGO_DB_PASSWORD}@cluster0.qvgpg4e.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri, server_api=ServerApi('1'))

try:
    db = client['blog_project']
    user_collection = db['users']

    print("You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# Stytch config
HOST = os.getenv("HOST", "localhost")
PORT = int(os.getenv("PORT", "4567"))
HOST_LINK_URL = f"http://{HOST}:{PORT}"
MAGIC_LINK_URL = f"http://{HOST}:{PORT}/authenticate"

STYTCH_PROJECT_ID = os.getenv("STYTCH_PROJECT_ID")
STYTCH_SECRET = os.getenv("STYTCH_SECRET")
if STYTCH_PROJECT_ID is None:
    sys.exit("STYTCH_PROJECT_ID env variable must be set before running")
if STYTCH_SECRET is None:
    sys.exit("STYTCH_SECRET env variable must be set before running")

stytch_client = stytch.Client(
    project_id=STYTCH_PROJECT_ID,
    secret=STYTCH_SECRET,
    environment="test",
)

# Flask
app = Flask(__name__)
app.secret_key = os.getenv("APP_SECRET_KEY")


@app.route("/", methods=['GET'])
# TODO: page for login and another for register
def index():
    login_form = RegisterOrLoginForm()
    return render_template('accounts/login-or-register.html', form=login_form)


@app.route("/email_sent", methods=["POST"])
def email_sent() -> str:
    resp = stytch_client.magic_links.email.login_or_create(
        email=request.form["email"],
        login_magic_link_url=MAGIC_LINK_URL,
        signup_magic_link_url=MAGIC_LINK_URL,
    )

    if resp.status_code != 200:
        print(resp)
        return "something went wrong sending magic link"

    user_id = resp.user_id
    user_resp = stytch_client.users.get(
        user_id=user_id
    )

    user_email = user_resp.emails[0].__dict__['email']
    recorded_user = user_collection.find_one({'email': user_email})

    if not recorded_user:
        new_user = User(user_email)
        user_collection.insert_one(new_user.__dict__)
    return render_template("accounts/email-sent.html")


@app.route("/authenticate")
def authenticate():
    # TODO: get session cookie and auth with mongo
    template_resp = make_response(render_template('home/index.html'))
    try:
        cookie_user_id = request.cookies.get('userID')
        resp = stytch_client.sessions.get(
            user_id=cookie_user_id
        )
    except:
        resp = stytch_client.magic_links.authenticate(
            token=request.args["token"],
            session_duration_minutes=1440
        )
        user_id = resp.user_id
        template_resp.set_cookie('userID', user_id)

    if resp.status_code != 200:
        print(resp)
        return "something went wrong authenticating token"
    return template_resp


@app.route("/dashboard")
def dashboard():
    # TODO: auth with mongo?
    try:
        user_id = request.cookies.get('userID')
        resp = stytch_client.sessions.get(
            user_id=user_id
        )
    except Exception as e:
        resp = None
        print(e)

    if resp is None or resp.status_code != 200:
        print(resp)
        return redirect('/')
    return render_template('home/index.html')


@app.route("/profile", methods=["GET", "POST"])
def profile():
    try:
        user_id = request.cookies.get('userID')
        user_resp = stytch_client.users.get(
            user_id=user_id
        )
    except Exception as e:
        user_resp = None
        print(e)

    if user_resp is None or user_resp.status_code != 200:
        print(user_resp)
        return redirect('/')

    user_email = user_resp.emails[0].__dict__['email']
    if 'edit_user' in request.form:
        user = User(
            email=request.form['email'],
            username=request.form['username'],
            firstname=request.form['firstname'],
            lastname=request.form['lastname'],
            aboutme=request.form['aboutme']
        )

        filter_email = {"email": user_email}
        new_value = {"$set": user.__dict__}
        user_collection.update_one(filter_email, new_value)
    recorded_user = user_collection.find_one({'email': user_email})
    edit_user_form = EditUser(
        email=recorded_user['email'],
        username=recorded_user['username'],
        firstname=recorded_user['firstname'],
        lastname=recorded_user['lastname'],
        aboutme=recorded_user['aboutme'] if recorded_user['aboutme'] else ''
    )

    return render_template('home/profile.html', current_user=recorded_user, form=edit_user_form)


@app.route("/create_post")
def create_post():
    return render_template('home/create_post.html')


if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=True)
