from flask import render_template
from app import app

@app.route("/")
def home_page():
    return render_template("MainPage.html")