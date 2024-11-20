from flask_sqlalchemy import SQLAlchemy
from app_learn.models import User
from app_learn.extensions import db

def create_user(data):
    try:
        new_user = User(
            name=data['name'], 
            email=data['email'],
            password=data['password'],
            point=data['point'])
        print("data user", new_user)
        db.session.add(new_user)
        db.session.commit()
        return {"message": "User created successfully!"}, 201
    except Exception as e:
        return {"error": str(e)}, 400

def get_users():
    try:
        users = db.session.query(User).all()
        users_list = [{"id": user.id, "name": user.name, "email": user.email} for user in users]
        return users_list
    except Exception as e:
        return {"error": str(e)}, 400

def get_user_by_id(user_id):
    try:
        user = db.session.get(User, user_id)
        if user:
            return {"id": user.id, "name": user.name, "email": user.email}
        else:
            return {"message": "User not found"}, 404
    except Exception as e:
        return {"error": str(e)}, 400

def update_user(user_id, data):
    try:
        user = db.session.get(User, user_id)
        if user:
            user.name = data['name']
            user.email = data['email']
            db.session.commit()
            return {"message": "User updated successfully!"}
        else:
            return {"message": "User not found"}, 404
    except Exception as e:
        return {"error": str(e)}, 400

def delete_user(user_id):
    try:
        user = db.session.get(User, user_id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return {"message": "User deleted successfully!"}
        else:
            return {"message": "User not found"}, 404
    except Exception as e:
        return {"error": str(e)}, 400
