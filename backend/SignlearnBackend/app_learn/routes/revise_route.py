from flask import jsonify, request,Blueprint
from app_learn.extensions import db
from ..models import ReviseData
revise = Blueprint('revise',__name__)

@revise.route('/revise', methods=['GET'])
def get_revise_data():
    response_code = 200
    try:
        revises = db.session.query(ReviseData).all()
        revise_list = [
            {
                "id": revise.id,
                "name": revise.name,
                "target": revise.target,
                "data": revise.data
            } for revise in revises
        ]
    except Exception as e:
        response_code = 500
        return {"message": "Error fetching courses", "error": str(e)}, response_code
    return jsonify(revise_list), response_code   