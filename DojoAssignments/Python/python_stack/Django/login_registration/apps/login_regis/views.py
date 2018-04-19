from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib.messages import error
import bcrypt
import re
# from form import Userform

def index(request):
    return render(request, "index.html")

def register(request):
    errors= User.objects.validate_registration(request.POST)
    if len(errors):
        for field, message in errors.iteritems():
            error(request, message, extra_tags=field)
        return redirect('/')

    else:
        User.objects.create(
            first_name = request.POST['first_name'],
            Last_name = request.POST['last_name'],
            email = request.POST['email'],
            password = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        )
        return render(request, "success.html", {'name': request.POST['first_name'], 'status': 'registered'})

def login(request):
    errors= User.objects.validate_login(request.POST)
    if len(errors):
        for field, message in errors.iteritems():
            error(request, message, extra_tags=field)
        return redirect('/')

    else:
        user = User.objects.filter(email = request.POST['email'])
        name = user.first_name
        return render(request,'success.html', {'status': 'logged in', 'name': name})

def success(request):
    return render(request,"success.html")


