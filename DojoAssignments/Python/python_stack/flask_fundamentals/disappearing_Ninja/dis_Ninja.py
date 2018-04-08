from flask import Flask, render_template,request, url_for
app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ninja')
def displayNinja():
    return render_template('ninja.html')

@app.route('/ninja/<color>')
def pick_Ninja(color):
    print color
    return render_template('disninja.html', color = color)

app.run(debug=True)