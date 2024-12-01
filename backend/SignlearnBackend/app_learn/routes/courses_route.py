from flask import jsonify, request,Blueprint
from app_learn.extensions import db
from ..models import LearningData
courses = Blueprint('courses',__name__)

@courses.route('/courses', methods=['GET'])
def get_courses():
    response_code = 200
    try:
        courses = db.session.query(LearningData).all()
        courses_list = [
            {
                "id": course.id,
                "name": course.name,
                "target": course.target,
                "data": course.data
            } for course in courses
        ]
    except Exception as e:
        response_code = 500
        return {"message": "Error fetching courses", "error": str(e)}, response_code
    return jsonify(courses_list), response_code   