from flask import Flask, redirect,render_template,redirect,session,request
import random
import datetime
app=Flask(__name__)
app.secret_key = 'secretkey'

@app.route('/')
def index():
    if 'gold' not in session:
        session['gold'] = 0
    if 'activity' not in session:
        session['activity'] = []
    return render_template('index.html', gold = session['gold'],activity = session['activity'])

@app.route('/process_money', methods = ['post'])
def findGold():
    value = request.form['building']
    print request.form['building']
    currenttime = datetime.datetime.now()
    if value == 'farm':
        rand = random.randint(10,20)
        session['gold'] += rand
        print 'gold {}'.format(session['gold'])
        session['activity'].append(["green", "Earned {} golds from the farm! {}".format(rand, currenttime)])

    elif value == 'cave':
        rand = random.randint(5,10)
        session['gold'] += rand
        print 'gold {}'.format(session['gold'])
        session['activity'].append(["green", "Earned {} golds from the cave! {}".format(rand, currenttime)])

    elif value == 'house':
        rand = random.randint(2,5)
        session['gold'] += rand
        print 'gold {}'.format(session['gold'])
        session['activity'].append(["green", "Earned {} golds from the house! {}".format(rand, currenttime)])
    
    elif value == 'casino':
        chance = random.randint(0,1)
        rand = random.randint(0,50)
        if chance == 0:
            session['gold'] += rand
            session['activity'].append(["green", "Entered a casino and earned {} golds {}".format(rand, currenttime)])
        else:
            session['gold'] -= rand
            session['activity'].append(["red", "Entered a casino and lost {} golds {}...Ouch...".format(rand, currenttime)])
    return redirect('/')

@app.route('/reset', methods = ['post'])
def reset():
    if 'gold' in session:
        session.pop('gold')
    return redirect('/')

app.run(debug=True)