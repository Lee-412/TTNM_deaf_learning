from flask import Flask, request, Blueprint;
from .extensions import db, ma
import os
from .models import User, LearningData

def create_db(app):
    print("Checking if database exists...")
    if not os.path.exists("instance/data.db"):
        db.create_all()  
        print("Create DB")
    else:
        print("Database already exists.")


def create_app(config_file = "config.py"):
    app =  Flask(__name__)
    app.config.from_pyfile(config_file)
    db.init_app(app)
    ma.init_app(app)
    with app.app_context():
        create_db(app)
    return app

