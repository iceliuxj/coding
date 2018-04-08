from flask import Flask, render_template, request
app=Flask(__name__)

@app.route('/')
def getSurvey():
    return render_template('index.html')

@app.route('/result', methods = ['post'])
def getResult():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template('result.html', name = name, location = location, language = language, comment = comment )

app.run(debug=True)
