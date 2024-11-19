from backend.SignlearnBackend.app_learn.models import DataItem, LearningData
from .extensions import ma

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'birth_date', 'gender', 'class_name')

class LearningDataSchema(ma.Schema):
    class Meta:
       fields =('id', 'name', 'target', 'data')


class ReviseDataSchema(ma.Schema):
    class Meta:
       fields =('id', 'name', 'target', 'data')

class ComunityDataSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'imgUrl','content','contact')

class DocumentDataSchema(ma.Schema):
    class Meta:
        fields = ('id','content')


class LibbaseDataSchema(ma.Schema):
    class Meta:
        fields = ('id','title','imgUrl','content','target' )


class SocialDataSchema(ma.Schema):
    class Meta:
        fields = ('id','content')


