from flask import Flask, render_template, redirect
from flask_wtf import FlaskForm
from wtforms import StringField, validators


class LoginForm(FlaskForm):
    email = StringField('Email', [validators.Length(min=5)])
    password = StringField('Password')


app = Flask(__name__)
app.secret_key = "222222"


@app.route("/", methods=['GET', 'POST'])
def index():
    login_form = LoginForm()
    if login_form.validate_on_submit():
        return redirect('/sucess')
    return render_template("index.html", form=login_form)


@app.route("/ababa/<name>")
def hello(name):
    return render_template("index.html", name=name)


if __name__ == "__main__":
    app.run(debug=True)
