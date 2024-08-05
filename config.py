from dotenv import get_key

class Config:
    SECRET_KEY=get_key(".env", "SECRET_KEY")
    SQLALCHEMY_DATABASE_URI=get_key(".env", "DATABASE_URI")
    SQLALCHEMY_TRACK_MODIFICATIONS=False