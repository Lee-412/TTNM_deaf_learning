from .extensions import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key  = True)
    name = db.Column(db.String(100), nullable = False)
    birth_date = db.Column(db.Date)
    gender = db.Column(db.String(10))
    class_name = db.Column(db.String(10))

    def __init__(self, name, birth_date, gender, class_name):
        self.name = name
        self.birth_date = birth_date
        self.gender = gender
        self.class_name = class_name


class LearningData(db.Model):
    __tablename__ = 'learningdata'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    target = db.Column(db.String(100), nullable=False)
    data = db.Column(db.JSON, nullable=False) 

    def __init__(self, name, target, data):
        self.name = name
        self.target = target
        self.data = data


class ReviseData(db.Model):
    __tablename__ = 'revise_data'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    target = db.Column(db.String(100), nullable=False)
    data = db.Column(db.JSON, nullable=False)  

    def __init__(self, name, target, data):
        self.name = name
        self.target = target
        self.data = data

class ComunityData(db.Model):
    __tablename__ = 'community_data'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    imgUrl = db.Column(db.String(100),  nullable=False)
    content = db.Column(db.String(1000), nullable=False)
    contact = db.Column(db.JSON, nullable=False)

    def __init__(self, title, imgUrl, content, contact):
        self.title = title
        self.imgUrl = imgUrl
        self.content = content
        self.contact = contact

class DocumentData(db.Model):
    __tablename__ = 'document_data'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.JSON)

    def __init__(self, content):
        self.content = content

class LibbaseData(db.Model):
    __tablename__ = 'libbase_data'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    imgUrl = db.Column(db.String(100),  nullable=False)
    content = db.Column(db.String(1000), nullable=False)
    target = db.Column(db.String(100), nullable=False)

    def __init__(self, title, imgUrl, content, target):
        self.title = title
        self.imgUrl = imgUrl
        self.content = content
        self.target = target

class SocialData(db.Model):
    __tablename__ = 'social_data'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.JSON)

    def __init__(self, content):
        self.content = content