from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from .models import Student
from django.views.generic.edit import CreateView
from .serializers import StudentSerializer 


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
    
