from .extensions import ma

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name','email','password', 'point')

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
        fields = ('id','title','content')


class LibbaseDataSchema(ma.Schema):
    class Meta:
        fields = ('id','title','imgUrl','content','target' )


class SocialDataSchema(ma.Schema):
    class Meta:
        fields = ('id','content')

        
class DictionarySchema(ma.Schema):
    class Meta:
        fields = ('_id','word', 'description', 'tl','url')

class StatisticsSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        fields = ('id', 'userID', 'timeStudied', 'wordStudiedPerDay', 'wordStudiedPerCategory')