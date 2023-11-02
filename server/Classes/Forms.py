from flask_wtf import FlaskForm
from flask_ckeditor import CKEditorField
from wtforms import StringField, validators, TextAreaField, DateTimeField


class RegisterOrLoginForm(FlaskForm):
    email = StringField(
        'Email',
        id='email_create',
        validators=[validators.DataRequired(), validators.Email()]
    )


class EditUserForm(FlaskForm):
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


class CreateOrUpdatePostForm(FlaskForm):
    title = StringField(
        'Title',
        id='create_post_title',
        validators=[validators.DataRequired()]
    )
    description = StringField(
        'Description',
        id='create_post_description',
        validators=[validators.DataRequired()]
    )
    slug = StringField(
        'Slug',
        id='create_post_slug',
        validators=[validators.DataRequired()]
    )
    content = CKEditorField(
        'Content',
        id='create_post_content',
        render_kw={'rows': 5, 'resize': 'none'},
        validators=[validators.DataRequired()]
    )
    date = DateTimeField(
        'Date',
        id='create_post_date',
        render_kw={'display': 'none'},
        validators=[validators.DataRequired()]
    )
