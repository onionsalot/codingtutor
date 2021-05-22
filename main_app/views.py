from django.shortcuts import render
from .models import Student
from django.views.generic.edit import CreateView

# Create your views here.
def home(request):
    students = Student.objects.all()
    return render(request, 'home.html', {'students': students})

class StudentCreate(CreateView):
    model = Student
    fields = '__all__'
    
