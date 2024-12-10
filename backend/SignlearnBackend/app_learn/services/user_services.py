from flask_sqlalchemy import SQLAlchemy
from app_learn.models import User, Statistics
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
        print('hit here get users', users[0])
        users_list = [{"id": user.id, "name": user.name, "email": user.email, "point" :user.point} for user in users]
        return users_list
    except Exception as e:
        return {"error": str(e)}, 400

def get_user_by_id(user_id):
    try:
        user = db.session.get(User, user_id)
        if user:
            return {"id": user.id, "name": user.name, "email": user.email, "point" :user.point}
        else:
            return {"message": "User not found"}, 404
    except Exception as e:
        return {"error": str(e)}, 400

def get_user_statistics_route_services(user_id): 
    try:
        user_statistics = db.session.query(Statistics).filter_by(userID=user_id).all()
        
        if user_statistics:
            result = []
            for stat in user_statistics:
                result.append({
                    "id": stat.id,
                    "userID": stat.userID,
                    "timeStudied": stat.timeStudied,
                    "wordStudiedPerDay": stat.wordStudiedPerDay,
                    "wordStudiedPerCategory": stat.wordStudiedPerCategory
                })
            return {"statistics": result}, 200  # Returning response and status code
        else:
            return {"message": "No statistics found for this user"}, 404  # Returning response and status code
    except Exception as e:
        return {"error": str(e)}, 400  # Returning response and status code




def update_user(user_id, data):
    try:
        user = db.session.get(User, user_id)
        if user:
            user.name = data['name']
            user.email = data['email']
            user.password = data['password']
            user.point = data['point']
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
