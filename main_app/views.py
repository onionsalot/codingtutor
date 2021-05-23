from django.http import HttpResponseRedirect
from rest_framework import serializers, permissions, status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Student
from django.views.generic.edit import CreateView
from .serializers import StudentSerializer, UserSerializer, UserSerializerWithToken 


# Create your views here.
@api_view(['GET'])
def home(request):
    students = Student.objects.all()
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)
    # return render(request, 'home.html', {'students': students})

@api_view(['POST'])
class StudentCreate(CreateView):
    model = Student
    fields = '__all__'
    
@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)