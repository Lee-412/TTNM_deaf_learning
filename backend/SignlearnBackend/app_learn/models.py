from .extensions import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key  = True)
    name = db.Column(db.String(100), nullable = False)
    email = db.Column(db.String(100), nullable = False)
    password = db.Column(db.String(100), nullable = False)
    point = db.Column(db.Integer)

    def __init__(self, name, email, password, point):
        self.name = name
        self.email = email
        self.password = password
        self.point = point


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
    title = db.Column(db.String(100))
    content = db.Column(db.JSON)

    def __init__(self,title, content):
        self.title=title
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
    title = db.Column(db.String(100))
    content = db.Column(db.JSON)

    def __init__(self, title,content):
        self.title=title
        self.content = content

class Dictionary(db.Model):
    __tablename__ = 'dictionary'
    _id = db.Column(db.String(100), primary_key=True)
    word = db.Column(db.String(100))
    description = db.Column(db.String(100))
    tl = db.Column(db.String(100))
    url = db.Column(db.String(100))

    def __init__(self, _id, word, description, tl,url):
        self._id=_id
        self.word = word
        self.description = description
        self.tl = tl