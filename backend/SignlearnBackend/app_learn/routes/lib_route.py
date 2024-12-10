from flask import jsonify, request,Blueprint
from app_learn.services.lib_services import get_comunity_data_service, get_libbase_data_service, delete_all_libbase_service, get_document_data_service, get_social_data_service,get_dictionary_data_services

librarys= Blueprint('librarys',__name__)

@librarys.route('/librarys/comunity', methods=['GET'])
def get_comuniti_data():
    print('hit get Comuniti data')
    response = get_comunity_data_service()
    print(response)
    return jsonify(response)  
  
@librarys.route('/librarys', methods=['GET'])
def get_librarys_data():
    print('hit get librarys data')
    response = get_libbase_data_service()
    print(response)
    return jsonify(response)


@librarys.route('/librarys/delete-all', methods=['GET'])
def delete_all_librarys():
    print('hit delete all librarys')
    response = delete_all_libbase_service()
    print(response)
    return jsonify(response)

@librarys.route('/librarys/document', methods=['GET'])
def get_document_data():
    print('hit get document data')
    response = get_document_data_service()
    print(response)
    return jsonify(response)

@librarys.route('/librarys/social-culture', methods=['GET'])
def get_social_data():
    print('hit get social-culture data')
    response = get_social_data_service()
    print(response)
    return jsonify(response)


@librarys.route('/librarys/dictionary', methods=['GET'])
def get_dictionary_data():
    print('hit get dictionary data')
    response = get_dictionary_data_services()
    print(response)
    return jsonify(response)