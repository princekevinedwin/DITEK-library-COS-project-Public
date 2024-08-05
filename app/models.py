from app import db

class User(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    username=db.Column(db.String(50), required=True, nullable=False, unique=True)
    password=db.Column(db.String(256))