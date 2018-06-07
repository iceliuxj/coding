from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib.messages import error
import bcrypt
import re
from datetime import datetime
from time import strftime

def index(request):
	return render(request, 'login.html')

# def login(request):
#     return render(request)

def register(request):
    errors= User.objects.validate_registration(request.POST)
    if len(errors):
        for field, message in errors.iteritems():
            error(request, message, extra_tags=field)
        return redirect('/register')

    else:
        User.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            email = request.POST['email'],
            password = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        )
        user=User.objects.filter(username= request.POST['username'])
        request.session['user_id']=user[0].id
        request.session['name']=user[0].first_name
        return render(request, 'user.html')
