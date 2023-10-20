from flask_wtf import FlaskForm
from wtforms import StringField, validators, TextAreaField


class RegisterOrLoginForm(FlaskForm):
    email = StringField(
        'Email',
        id='email_create',
        validators=[validators.DataRequired(), validators.Email()]
    )


class EditUser(FlaskForm):
    username = StringField(
        'Username',
        id='username_edit',
        validators=[validators.DataRequired()]
    )
    email = StringField(
        'Email',
        id='email_edit',
        render_kw={'readonly': 'readonly'}
    )
    firstname = StringField(
        'Firstname',
        id='firstname_edit'
    )
    lastname = StringField(
        'Lastname',
        id='lastname_edit'
    )
    aboutme = TextAreaField(
        'Aboutme',
        id='aboutme_edit',
        render_kw={'rows': 4, 'resize': 'none'}
    )

class CreatePost(FlaskForm):
    