from django.shortcuts import render, HttpResponse, redirect
import random
import datetime

def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    if 'activity' not in request.session:
        request.session['activity'] = []
    return render(request, "../templates/index.html")

def process(request):
    value = request.POST['building']
    print request.POST['building']
    currenttime = datetime.datetime.now()
    if value == 'farm':
        rand = random.randint(10,20)
        request.session['gold'] += rand
        print 'gold {}'.format(request.session['gold'])
        request.session['activity'].append(["green", "Earned {} golds from the farm! {}".format(rand, currenttime)])

    elif value == 'cave':
        rand = random.randint(5,10)
        request.session['gold'] += rand
        print 'gold {}'.format(request.session['gold'])
        request.session['activity'].append(["green", "Earned {} golds from the cave! {}".format(rand, currenttime)])

    elif value == 'house':
        rand = random.randint(2,5)
        request.session['gold'] += rand
        print 'gold {}'.format(request.session['gold'])
        request.session['activity'].append(["green", "Earned {} golds from the house! {}".format(rand, currenttime)])
    
    elif value == 'casino':
        chance = random.randint(0,1)
        rand = random.randint(0,50)
        if chance == 0:
            request.session['gold'] += rand
            request.session['activity'].append(["green", "Entered a casino and earned {} golds {}".format(rand, currenttime)])
        else:
            request.session['gold'] -= rand
            request.session['activity'].append(["red", "Entered a casino and lost {} golds {}...Ouch...".format(rand, currenttime)])
    return redirect('/')

def reset(request):
    if 'gold' in request.session:
        request.session.pop('gold')
    return redirect('/')
