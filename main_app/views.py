from django.shortcuts import render
from django.http import HttpResponse

class Student():

    def __init__(self, name, email, password, zipcode):
        self.name = name 
        self.email = email 
        self.password = password
        self.zipcode = zipcode
    
students = [
    Student('Bob', 'bob@gmail.com', 'abc123', '90932'),
    Student('Jerry', 'jerry@gmail.com', 'abcd1234', '74302'),
]

# Create your views here.
def home(request):
    return render(request, 'home.html', {'students': students})