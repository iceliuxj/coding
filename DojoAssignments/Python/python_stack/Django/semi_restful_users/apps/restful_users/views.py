from django.shortcuts import render, HttpResponse, redirect
from models import *
  # the index function is called when root is visited
def index(request):
    return render(request, "index.html", {'users': User.objects.all()})

def new(request):
    return render(request, "add_user.html")

def create(request):
    email= request.POST['email'] 
    name = request.POST['first_name'] + request.POST['last_name']
    print name 
    print email
    User.objects.create(name = name, email = email)
    return redirect('/users')

def display(request, number):
    context = {
        "number": number,
        "user": User.objects.get(id=number)
    }
    return render(request,"display_user.html", context)

def edit(request, number):
    context = {
        "number": number,
        "user": User.objects.get(id=number)
    }
    return render(request, "edit_user.html", context)

def update(request, number):
    updated_user = User.objects.get(id = number)
    updated_user.name = request.POST['first_name'] + request.POST['last_name']
    updated_user.email = request.POST['email'] 
    updated_user.save()
    return redirect(("/users/{}").format(number))

def destroy(request,number):
    User.objects.get(id = number).delete()
    return redirect('/users')