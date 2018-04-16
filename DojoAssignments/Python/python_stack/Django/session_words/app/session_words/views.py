from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime

def index(request):
    if 'list' not in request.session:
        request.session['list'] = []
    return render(request,"../templates/index.html")

def process(request):
    request.session['word'] = request.POST['word']
    request.session['color'] = request.POST['color']
    request.session['font'] =  request.POST.get('font', False)
    request.session['time'] = strftime("%H:%M %p %b %d, %Y ", gmtime())

    list = {
        'word': request.session['word'],
        'color': request.session['color'],
        'font': request.session['font'],
        'time': request.session['time']
    }
    request.session['list'].append(list)
    print request.session['list']
    return redirect('/session_words')

def clear(request):
    del request.session['list']
    return redirect('/session_words')