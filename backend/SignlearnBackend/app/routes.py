from flask import Blueprint, jsonify

mains = Blueprint('main', __name__)

@mains.route('/a')
def home():
    return "hello"
