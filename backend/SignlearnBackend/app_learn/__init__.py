from flask import Flask
from .extensions import db, ma
import os
from .routes.user_route import users
from .routes.courses_route import courses
from flask_cors import CORS

def create_db(app):
    print("Checking if database exists...")
    if not os.path.exists("instance/data.db"):
        db.create_all()  
        print("Create DB")
    else:
        print("Database already exists.")


def create_app(config_file = "config.py"):
    app =  Flask(__name__)
    CORS(app=app)
    app.config.from_pyfile(config_file)
    app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///data.db"
    db.init_app(app)
    ma.init_app(app)
    with app.app_context():
        create_db(app)
    app.register_blueprint(users)
    app.register_blueprint(courses)
    return app

