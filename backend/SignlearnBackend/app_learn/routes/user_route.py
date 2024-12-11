from flask import jsonify, request,Blueprint
from app_learn.services.user_services import create_user, get_user_by_id,get_users, update_user,delete_user,get_user_statistics_route_services,Signin_User_services

users = Blueprint('users',__name__)

@users.route('/users', methods=['POST'])
def create_user_route():
    data = request.get_json() 
    print("check data",data)
    response, status_code = create_user(data)
    print(response)
    return jsonify(response), status_code

@users.route('/users/signin', methods=['POST'])
def Signin_User():
    data = request.get_json() 
    print("check data",data)
    response, status_code = Signin_User_services(data)
    print(response)
    return jsonify(response), status_code



@users.route('/users', methods=['GET'])
def get_users_route():
    response = get_users()
    print(response)
    return jsonify(response)


@users.route('/users/<int:id>', methods=['GET'])
def get_user_route(id):
    response, status_code = get_user_by_id(id)
    return jsonify(response), status_code


@users.route('/users/<int:id>', methods=['PUT'])
def update_user_route(id):
    data = request.get_json()
    response, status_code = update_user(id, data)
    return jsonify(response), status_code


@users.route('/users/<int:id>', methods=['DELETE'])
def delete_user_route(id):
    response, status_code = delete_user(id)
    return jsonify(response), status_code

@users.route('/users/statistic/<int:id>', methods=['GET'])
def get_user_statistics_route(id):
    response, status_code = get_user_statistics_route_services(id)
    return jsonify(response), status_code
