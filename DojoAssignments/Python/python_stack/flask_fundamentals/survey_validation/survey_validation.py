from flask import Flask, render_template, redirect, request
app=Flask(__name__)


@app.route('/')
def getSurvey():
    return render_template('index.html')

@app.route('/result', methods = ['post'])
def validate():
    name = request.form['name']
    comment = request.form['comment']
    if len(request.form['name']) < 1:
        msg = "Name cannot be empty!"
    else:
        msg ='Great! The name has not been used.'

    if len(request.form['comment']) >= 10:
        alert = "Entry should no longer than 120 characters."
    else:
        comment = request.form['comment']
    return redirect('/')

@app.route('/result', methods = ['post'])
def getResult():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template('result.html', name = name, location = location, language = language, comment = comment )
    

app.run(debug=True)

