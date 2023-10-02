import os
import sys

import dotenv
import stytch
from flask import Flask, render_template, redirect, request
from flask_wtf import FlaskForm
from wtforms import StringField,validators

# Stytch config
dotenv.load_dotenv()

HOST = os.getenv("HOST", "localhost")
PORT = int(os.getenv("PORT", "4567"))
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
class LoginForm(FlaskForm):
    email = StringField('Email', [validators.InputRequired(), validators.Length(min=5)])


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
    return render_template("emailSent.html")


@app.route("/authenticate")
def authenticate():
    resp = stytch_client.magic_links.authenticate(request.args["token"])

    if resp.status_code != 200:
        print(resp)
        return "something went wrong authenticating token"
    return redirect('/dashboard')


@app.route("/dashboard")
def dashboard():
    return render_template('home/index.html')


if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=True)
