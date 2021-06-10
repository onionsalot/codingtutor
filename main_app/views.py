from rest_framework import permissions, status, authentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, Profile, Slot, Review
from .serializers import UserSerializer, UserSerializerWithToken ,ProfileSerializer, ProfileImageSerializer, SlotSerializer, ReviewSerializer
import cloudinary.uploader

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

@api_view(['GET'])
def details(request, user_id):
    profile = Profile.objects.get(user=user_id)
    serializer = ProfileSerializer(profile, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def user_reviews(request, tutor_id):
    reviews = Review.objects.filter(tutor=tutor_id)
    serializer = ReviewSerializer(reviews, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def add_review(request, tutor_id, student_id):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    data = request.data['form']
    student = User.objects.get(id=student_id)
    tutor = User.objects.get(id=tutor_id)
    review = Review.objects.create(
        comment = data['comment'],
        rating = data['rating'],
        student = student,
        tutor = tutor
    )
    serializer = ReviewSerializer(review, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def available_slots(request, user_id):
    all_slots = Slot.objects.filter(tutor=user_id)
    serializer = SlotSerializer(all_slots, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def add_slot(request, user_id):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    data = request.data
    tutor = User.objects.get(id=user_id)
    slot = Slot.objects.create(
        hour = data['hour'],
        date = data['date'],
        tutor = tutor,
    )
    serializer = SlotSerializer(slot, many = False)
    return Response(serializer.data)

@api_view(['PUT'])
def assoc_student(request, slot_id, user_id):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    data = request.data
    student = User.objects.get(id=user_id)
    slot = Slot.objects.filter(id=slot_id).update(
        student = student,
    )
    serializer = SlotSerializer(slot, many = False)
    return Response(serializer.data)


class UserList(APIView):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        print(request)
        if serializer.is_valid():
            serializer.save()
            user_id = User.objects.last().id
            user = User.objects.get(id=user_id)
            user.profile.first_name = request.data['firstName']
            user.profile.last_name = request.data['lastName']
            user.profile.email = request.data['email']
            user.profile.bio = request.data['bio']
            user.profile.zipcode = request.data['zipcode']
            user.profile.place_id = request.data['place_id']
            user.profile.skills = request.data['skills']
            user.profile.rate = request.data['rate']
            # user.profile.image = request.data['image']
            user.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def add_image(request):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    user_id = User.objects.last().id
    user = User.objects.get(id=user_id)
    print(request.FILES.get('image',None))
    cloudinaryImg = cloudinary.uploader.upload(request.FILES.get('image',None))
    print('cloudinary image', cloudinaryImg['url'])
    profile = Profile.objects.filter(user=user).update(
        image=cloudinaryImg['url']
    )
    serializer = ProfileImageSerializer(profile, many = False)
    return Response(serializer.data)