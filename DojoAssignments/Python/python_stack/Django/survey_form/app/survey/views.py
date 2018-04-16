from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request,"../templates/index.html")

def get(request):
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['comment'] = request.POST['comment']
    if 'attempt' not in request.session:
        request.session['attempt'] = 1
    else:
        request.session['attempt'] += 1
    return render(request, '../templates/result.html')
    
    

def back(request):
    return redirect('/')
    


