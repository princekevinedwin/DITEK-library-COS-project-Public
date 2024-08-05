from flask import render_template, request
from app import app, db
from flask_login import login_user, current_user
from models import User

@app.route("/")
def home_page():
    return render_template("MainPage.html", current_user=current_user)

@app.route("/reg")
def reg_page():
    return render_template("reg.html")

@app.route("/sign")
def sign_page():
    return render_template("sign.html")

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("username")
    user = db.session.query(User).get(username=username)
    login_user(user)
    return "User Logged In", 200

@app.route("/api/register", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("username")
    user = User(username=username, password=password)
    db.session.add(user)
    db.session.commit()
    return "User Created successfully", 201
