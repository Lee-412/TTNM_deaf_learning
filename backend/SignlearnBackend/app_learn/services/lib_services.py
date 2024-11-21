from app_learn.models import ComunityData, LibbaseData, DocumentData, SocialData
from app_learn.extensions import db
import json

def get_comunity_data_service():
    try:

        print("hit get comunity service")
        comunities = db.session.query(ComunityData).all()
        comunity_list = [{
            "id": comunity.id, 
            "title": comunity.title, 
            "imgUrl": comunity.imgUrl,
            "content": comunity.content,
            "contact": comunity.contact,

            } for comunity in comunities]
        
        return comunity_list
    except Exception as e:
        return {"error": str(e)}, 400
    
def get_libbase_data_service():
    try:
        print("hit get libbase service")
        libbases = db.session.query(LibbaseData).all()
        libbase_list = [{
            "id": libbase.id,
            "title": libbase.title,
            "imgUrl": libbase.imgUrl,
            "content": libbase.content,
            "target": libbase.target,

            } for libbase in libbases]
        
        return libbase_list
    except Exception as e:
        return {"error": str(e)}, 400

def get_document_data_service():
    try:
        print("hit get document service")
        documents = db.session.query(DocumentData).all()
        print(documents)
        document_list = [{
            "id": document.id,
            "title": document.title,
            "content": document.content,
            } for document in documents]
        return document_list
    except Exception as e:
        return {"error": str(e)}, 400


def get_social_data_service():
    try:
        print("hit get social service")
        socials = db.session.query(SocialData).all()
        print(socials)
        social_lists = [{
            "id": social.id,
            "title": social.title,
            "content": social.content,
            } for social in socials]
        return social_lists
    except Exception as e:
        return {"error": str(e)}, 400



def insert_community_data_service(data):
    for item in data:
        title = item['title']
        imgUrl = item['imgUrl']
        content = item['content']
        contact = json.dumps(item['contact']) 

        community = ComunityData(
            title=title,
            imgUrl=imgUrl,
            content=content,
            contact=contact
        )
        db.session.add(community)
    
    db.session.commit()

def insert_libbase_data_service(data):
    for item in data:
        title = item['title']
        imgUrl = item['imgUrl']
        content = item['content']
        target = item['target']

        libdata = LibbaseData(
            title=title,
            imgUrl=imgUrl,
            content=content,
            target=target
        )
        db.session.add(libdata)
    
    db.session.commit()

def delete_all_libbase_service():
    try:
        print('hit delete all data')
        rows_deleted = db.session.query(LibbaseData).delete()
        db.session.commit()
        return {"message": f"{rows_deleted} community data deleted successfully!"}, 200
    except Exception as e:
        db.session.rollback()
        return {"error": str(e)}, 400
    
def insert_document_data_service(data):
    for item in data:
        title=item['title']
        documentData = DocumentData(
            title=title,
            content=item['content'],
        )
        db.session.add(documentData)
    
    db.session.commit()

def insert_social_data_service(data):
    for item in data:
        title=item['title']
        socialData = SocialData(
            title=title,
            content=item['content'],
        )
        db.session.add(socialData)
    
    db.session.commit()