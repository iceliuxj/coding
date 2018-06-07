from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
    context = {
        'attempt': request.session['attempt'],
        'random': get_random_string(length=14)
    }
    return render(request,"../templates/index.html", context)

def generate(request):
    if 'attempt' not in request.session:
        request.session['attempt'] = 0
    else:
        request.session['attempt']+= 1
    return redirect('/random_word')