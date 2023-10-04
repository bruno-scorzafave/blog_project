import os
import sys
import dotenv
import stytch

from flask import Flask, render_template, request, make_response
from flask_wtf import FlaskForm
from wtforms import StringField, validators
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from Classes import User

# mongo config
MONGO_DB_USER = os.getenv("MONGO_DB_USER")
MONGO_DB_PASSWORD = os.getenv("MONGO_DB_PASSWORD")
uri = f"mongodb+srv://{MONGO_DB_USER}:{MONGO_DB_PASSWORD}@cluster0.qvgpg4e.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri, server_api=ServerApi('1'))

try:
    db = client['blog_project']
    collection = db['users']
    a = collection.insert_one({'x': 1, '_id': '0'})
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# Stytch config
dotenv.load_dotenv()

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


# Forms class
class RegisterOrLoginForm(FlaskForm):
    username = StringField(
        'Username',
        id='username_create',
        validators=[validators.DataRequired()]
    )
    email = StringField(
        'Email',
        id='email_create',
        validators=[validators.DataRequired(), validators.Email()]
    )


app = Flask(__name__)
app.secret_key = os.getenv("APP_SECRET_KEY")


@app.route("/", methods=['GET'])
def index():
    login_form = RegisterOrLoginForm()
    return render_template('accounts/login-or-register.html', form=login_form)


@app.route("/login_or_create_user", methods=["POST"])
def login_or_create_user() -> str:
    resp = stytch_client.magic_links.email.login_or_create(
        email=request.form["email"],
        login_magic_link_url=MAGIC_LINK_URL,
        signup_magic_link_url=MAGIC_LINK_URL,
    )

    if resp.status_code != 200:
        print(resp)
        return "something went wrong sending magic link"
    return render_template("accounts/email-sent.html")


@app.route("/authenticate")
def authenticate():
    template_resp = make_response(render_template('home/index.html'))
    try:
        user_id = request.cookies.get('userID')
        resp = stytch_client.sessions.get(
            user_id=user_id
        )
    except:
        resp = stytch_client.magic_links.authenticate(
            token=request.args["token"],
            session_duration_minutes=1440
        )
        template_resp.set_cookie('userID', resp.user_id)

    if resp.status_code != 200:
        print(resp)
        return "something went wrong authenticating token"
    return template_resp


@app.route("/dashboard")
def dashboard():
    user_id = request.cookies.get('userID')
    resp = stytch_client.sessions.get(
        user_id=user_id
    )

    if resp.status_code != 200:
        print(resp)
        login_form = RegisterOrLoginForm()
        return render_template('accounts/login-or-register.html', form=login_form)
    return render_template('home/index.html')


if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=True)
