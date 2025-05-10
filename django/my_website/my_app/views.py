from django.shortcuts import render, HttpResponse
from .models import TodoItem

# Create your views here.
# def home(request):
#     return HttpResponse("Hello World!")

def home(request):
    return render(request, 'home.html')

def say_hello(request):
    return render(request, 'hello.html', {"name": 'Joyal'})