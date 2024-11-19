from flask import Blueprint, jsonify

mains = Blueprint('mains', __name__)

@mains.route('/a')
def home():
    return "hello"
