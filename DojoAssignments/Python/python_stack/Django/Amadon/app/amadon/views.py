from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, "../templates/index.html")

def process(request):
    