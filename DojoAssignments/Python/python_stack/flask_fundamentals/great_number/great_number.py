from flask import Flask, render_template, session, redirect, request, url_for
import random
app=Flask(__name__)
app.secret_key = 'secretkey'

@app.route('/')
def index():
    if 'rand' not in session:
        session['rand'] = random.randint(1,100)
        return render_template('index.html', numstate='displayform', resetstate='hideform')
    elif 'number' not in session:
        return render_template('index.html', numstate='displayform', resetstate='hideform')
    print 'rand {}'.format(session['rand'])

    number = session['number']
    rand = session['rand']
    if number > rand:
        play = "play"
        session['msg'] = "too high"
        print "too high"
    elif number < rand:
        play = "play"
        session['msg'] = "too low"
        print "too low"
    elif number == rand:
        bingo = "bingo" 
        session['playagain'] = 1
        session['msg'] = "{} was the number".format(number)
        print "{} was the number".format(number)
        return render_template('index.html', playstate='hideform', bingo = "bingo", resetstate='displayform')
    return render_template('index.html', playstate='displayform', play= "play",resetstate='hideform')


@app.route('/number_logic', methods = ['post'])
def number_logic():
    number = int(request.form['number'])
    session['number'] = number
    return redirect('/')

@app.route('/reset', methods = ['post'])
def reset():
    if 'rand' in session:
        session.pop('rand')
        session.pop('number')
    return redirect('/')

app.run(debug=True)
