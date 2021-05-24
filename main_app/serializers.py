from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
# from .models import Student
from .models import Profile
from django.contrib.auth.models import User

# class StudentSerializer(serializers.ModelSerializer):
#   class Meta: 
#     model = Student
#     fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
  class Meta: 
    model = User
    fields = ('username', )

class ProfileSerializer(serializers.ModelSerializer):
  class Meta: 
    model = Profile
    fields = ('user','bio','zipcode','skills' )

class UserSerializerWithToken(serializers.ModelSerializer):
  token = serializers.SerializerMethodField()
  password = serializers.CharField(write_only=True)

  def get_token(self, obj):
    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
    payload = jwt_payload_handler(obj)
    token = jwt_encode_handler(payload)
    return token

  def create(self, validated_data):
    password = validated_data.pop('password', None)
    instance = self.Meta.model(**validated_data)
    if password is not None:
      instance.set_password(password)
    instance.save()
    return instance



  class Meta:
    model = User
    fields = ('token', 'username', 'password')