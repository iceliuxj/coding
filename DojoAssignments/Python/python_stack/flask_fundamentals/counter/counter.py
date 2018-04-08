from flask import Flask, render_template, session,redirect
app = Flask(__name__)
app.secret_key = 'secretkey'

@app.route('/')
def index():
    if 'count' not in session:
        session['count'] = 0
    else:
        session['count'] += 1
    return render_template('index.html')

@app.route('/add')
def add():
    session['count'] += 2
    return redirect('/')

@app.route('/reset')
def reset():
    session['count'] = 0
    return redirect('/')

app.run(debug=True)
