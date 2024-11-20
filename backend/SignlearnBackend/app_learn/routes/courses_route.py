from flask import jsonify, request,Blueprint
from app_learn.services.user_services import create_user, get_user_by_id,get_users, update_user,delete_user

courses = Blueprint('courses',__name__)

@courses.route('/courses', methods=['GET'])
def get_courses():
    return "You in courses path"        