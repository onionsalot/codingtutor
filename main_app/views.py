from rest_framework import serializers, permissions, status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, Profile, Slot
from .serializers import UserSerializer, UserSerializerWithToken ,ProfileSerializer, SlotSerializer


@api_view(['GET'])
def home(request):
    return ""
    
@api_view(['GET'])
def current_user(request):
    user_id = User.objects.get(username = request.user).id
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

@api_view(['GET'])
def all_profiles(request):
    profiles = Profile.objects.all()
    serializer = ProfileSerializer(profiles, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def add_slot(request, user_id):
    data = request.data
    slot = Slot.objects.create(
        hour = data['hour'],
        date = data['date'],
        tutor = data[user_id],
    )
    serializer = SlotSerializer(slot, many = False)
    return Response(serializer.data)


class UserList(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)

        if serializer.is_valid():
            serializer.save()
            user_id = User.objects.last().id
            user = User.objects.get(id=user_id)
            user.profile.first_name = request.data['firstName']
            user.profile.last_name = request.data['lastName']
            user.profile.email = request.data['email']
            user.profile.bio = request.data['bio']
            user.profile.zipcode = request.data['zipcode']
            user.profile.skills = request.data['skills']
            user.profile.rate = request.data['rate']
            user.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

