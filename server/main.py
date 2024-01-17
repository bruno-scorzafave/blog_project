import os
import sys
import dotenv
import stytch
import json

from flask import Flask, render_template, request, make_response, redirect
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_ckeditor import CKEditor

from Classes.User import User
from Classes.BlogPost import BlogPost
from Classes.Comment import Comment

from Classes.Forms import RegisterOrLoginForm, EditUserForm, CreateOrUpdatePostForm
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
    comment_collection = db['comments']

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

ckeditor = CKEditor(app)
CORS(app)


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
    filter_email = {"email": user_email}
    if 'edit_user' in request.form:
        user = User(
            email=request.form['email'],
            username=request.form['username'],
            firstname=request.form['firstname'],
            lastname=request.form['lastname'],
            aboutme=request.form['aboutme']
        )

        new_value = {"$set": user.__dict__}
        user_collection.update_one(filter_email, new_value)
    recorded_user = user_collection.find_one(filter_email)
    edit_user_form = EditUserForm(
        email=recorded_user['email'],
        username=recorded_user['username'],
        firstname=recorded_user['firstname'],
        lastname=recorded_user['lastname'],
        aboutme=recorded_user['aboutme'] if recorded_user['aboutme'] else ''
    )

    return render_template('home/profile.html', current_user=recorded_user, form=edit_user_form)


@app.route("/post/<operation>/<post_id>", methods=["GET", "POST"])
def post(operation, post_id):
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
    filter_email = {"email": user_email}
    recorded_user = user_collection.find_one(filter_email)

    if 'save_post' in request.form:
        if post_id in recorded_user['posts']:
            post = recorded_user['posts'][str(post_id)]
            post_class = BlogPost(
                id=post_id,
                title=request.form['title'],
                description=request.form['description'],
                slug=request.form['slug'],
                content=request.form['content'],
                created_at=post['created_at']
            )
            user_collection.update_one(filter_email, {'$set': post_class.dict()})
        else:
            post_class = BlogPost(
                id=post_id,
                title=request.form['title'],
                description=request.form['description'],
                slug=request.form['slug'],
                content=request.form['content']
            )
            user_collection.update_one(filter_email, {'$set': post_class.dict()})
            user_collection.update_one(filter_email, {'$inc': {'posts.qty': 1}})
            user_collection.update_one(filter_email, {'$inc': {'posts.last_indexed': 1}})

    recorded_user = user_collection.find_one(filter_email)
    if operation == 'delete':
        user_collection.update_one(filter_email, {'$unset': {f'posts.{post_id}': ''}})
        user_collection.update_one(filter_email, {'$set': {'posts.qty': int(recorded_user['posts']['qty']) - 1}})
        return redirect('/posts')
    create_post_form = CreateOrUpdatePostForm()
    if operation == 'update':
        post = recorded_user['posts'][str(post_id)]
        create_post_form.title.data = post['title']
        create_post_form.description.data = post['description']
        create_post_form.slug.data = post['slug']
        create_post_form.content.data = post['content']

    return render_template('home/create_or_update_post.html', form=create_post_form, operation=operation, post_id=post_id)


@app.route("/posts")
def posts():
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
    filter_email = {"email": user_email}
    recorded_user = user_collection.find_one(filter_email)

    posts = recorded_user['posts']
    posts_last_indexed = posts['last_indexed']

    return render_template('home/posts.html', posts=posts, posts_last_indexed=posts_last_indexed)


@app.route("/get_posts/<user_email>")
def get_posts(user_email):
    filter_email = {"email": user_email}
    recorded_user = user_collection.find_one(filter_email)

    return json.dumps(recorded_user['posts'], default=str)


@app.route("/get_post/<user_email>/<post_title>")
def get_post(user_email, post_title):
    filter_email = {"email": user_email}
    recorded_user = user_collection.find_one(filter_email)
    for index, post in recorded_user['posts'].items():
        if index.isnumeric() and post['title'] == post_title:
            return json.dumps({index: post}, default=str)


@app.route("/get_profile/<user_email>")
def get_profile(user_email):
    filter_email = {"email": user_email}
    recorded_user = user_collection.find_one(filter_email, {'posts': False})

    return json.dumps(recorded_user, default=str)


@app.route("/insert/comment", methods=["POST"])
def comment():
    request_json = request.get_json()
    comment_class = Comment(
        post_id=request_json['post_id'],
        name=request_json['name'],
        email=request_json['email'],
        message=request_json['message']
    )

    comment_collection.insert_one(comment_class.__dict__)

    return json.dumps({'success': True}), 200, {'ContentType': 'application/json'}


@app.route("/get_comments/<post_id>")
def get_comments(post_id):
    filter_post = {"post_id": post_id}
    recorded_comments = comment_collection.find(filter_post)
    comment_array = []
    for comment in recorded_comments:
        comment_array.append(comment)

    return json.dumps(comment_array, default=str)


if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=True)
