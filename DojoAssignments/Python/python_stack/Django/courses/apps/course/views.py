from django.shortcuts import render, HttpResponse, redirect
from models import *
from django.contrib.messages import error

def index(request):
    return render(request, "index.html", {'courses': Course.objects.all()})

def add(request):
    errors= Course.objects.basic_validator(request.POST)
    if len(errors):
        for tag, message in errors.iteritems():
            error(request, message, extra_tags=tag)
        return redirect('/')

    else:
        name = request.POST['name']
        desc = request.POST['desc']
        print request.POST['desc']
        Course.objects.create(name = name, desc = desc)
    return redirect('/')

def confirm(request,number):   
    return render(request, 'delete.html', {'courses': Course.objects.get(id = number)})

def destroy(request,number):
    Course.objects.get(id = number).delete()
    return redirect('/')





    
