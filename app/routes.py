from flask import render_template
from app import app

@app.route("/")
def home_page():
    return render_template("MainPage.html")

@app.route("/reg")
def reg_page():
    return render_template("reg.html")

@app.route("/sign")
def sign_page():
    return render_template("sign.html")
