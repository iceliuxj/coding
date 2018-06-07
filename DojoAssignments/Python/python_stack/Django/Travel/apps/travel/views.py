from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib.messages import error
import bcrypt
import re
from datetime import datetime
from time import strftime

def index(request):
    return render(request, "main.html")

def register(request):
    errors= User.objects.validate_registration(request.POST)
    if len(errors):
        for field, message in errors.iteritems():
            error(request, message, extra_tags=field)
        return redirect('/main')

    else:
        User.objects.create(
            name = request.POST['name'],
            username = request.POST['username'],
            password = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        )
        user=User.objects.filter(username= request.POST['username'])
        request.session['user_id']=user[0].id
        request.session['name']=user[0].name
        return redirect('/travels')

def login(request):
    errors= User.objects.validate_login(request.POST)
    if len(errors):
        for field, message in errors.iteritems():
            error(request, message, extra_tags=field)
        return redirect('/main')

    else:
        user=User.objects.filter(username= request.POST['username'])
        request.session['user_id']=user[0].id
        request.session['name']=user[0].name
        return redirect('/travels')

def home(request):
    users = User.objects.all().exclude(id=request.session['user_id'])
    mytrips = User.objects.get(id = request.session['user_id']).trips.all()
    othertrips = Trip.objects.all().exclude(id=request.session['user_id'])
    context = {
        'users': users,
        'mytrips' : mytrips,
        'othertrips' : othertrips
    }
    return render(request, "travels.html", context)

def join(request,number):
    print "here i am"
    trip = Trip.objects.get(id=number)
    user = User.objects.get(id=request.session['user_id'])
    trip.liked_users.add(user)
    trip.save()
    return redirect('/travels')

def add(request):
    return render(request, 'addtrip.html')

    
def create(request):
    errors= Trip.objects.validate_trip(request.POST)
    if len(errors):
        for field, message in errors.iteritems():
            error(request, message, extra_tags=field)
        return redirect('/travels/add')
    
    else:
        pass_id = request.session['user_id']
        Trip.objects.create(
            dest = request.POST['dest'],
            desc = request.POST['desc'],
            travel_date_from = request.POST['start'],
            travel_date_to = request.POST['end'],
            user = User.objects.get(id = pass_id )
            )
        trip=Trip.objects.filter(user = User.objects.get(id = pass_id))
        request.session['trip_id']=trip[0].id
        return redirect('/travels')



def dest(request, number):
    user = User.objects.get(id=request.session['user_id'])
    trip = Trip.objects.get(id=number)
    liked_user = trip.liked_users.all()

    context = {
        'trip': trip,
        'liked_users': liked_user,
        'current_user': user,
    }
    return render(request, 'dest.html', context)
   
def logout(request):
    request.session.pop('user_id')
    return redirect('/main')