from django.shortcuts import render, HttpResponse

# Create your views here.
# def home(request):
#     return HttpResponse("Hello World!")

def home(request):
    return render(request, 'home.html')
