from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

app = Flask(__name__)
db = SQLAlchemy()

def create_app():
    app.config.from_object(Config)
    db.init_app(app)
    return app

from app import routes