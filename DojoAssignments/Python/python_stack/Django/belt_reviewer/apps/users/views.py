from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib.messages import error
import bcrypt
import re

def index(request):
    return render(request, "index.html")

def register(request):
    errors= User.objects.validate_registration(request.POST)
    if len(errors):
        for field, message in errors.iteritems():
            error(request, message, extra_tags=field)
        user=User.objects.filter(email= request.POST['email'])
        request.session['user_id']=user[0].id
        request.session['name']=user[0].name
        return redirect('/')

    else:
        return redirect('/books')

def login(request):
    errors= User.objects.validate_login(request.POST)
    if len(errors):
        for field, message in errors.iteritems():
            error(request, message, extra_tags=field)
        return redirect('/')

    else:
        return redirect('/books')

def user(request, id):
    context = {
        "id" : id,
        "user" : User.objects.get(id = id)
    }
    return render(request, 'user.html', context)

