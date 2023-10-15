from flask_wtf import FlaskForm
from wtforms import StringField, validators


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
