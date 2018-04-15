from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'fullfriendsDB')
@app.route('/')
def index():
    query = "SELECT *FROM friends"
    friends = mysql.query_db("SELECT * FROM friends")
    print friends
    return render_template('index.html', friends = friends)
@app.route('/friends', methods=['POST'])
def create():
    # add a friend to the database
    query = "insert into friends (name, age) VALUES (:name, :age)"
    data = {
        'name': request.form['name'],
        'age': request.form['age']
    }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/update_friend/<friend_id>', methods = ['POST'])
def update(friend_id):
    query = "UPDATE friends SET name = :name, age = :age Where id = :id"
    data = {
        'name': request.form['name'],
        'age': request.form['age'],
        'id': friend_id
    }
    mysql.query_db(query,data)
    return redirect('/')

@app.route('/friends/<friend_id>')
def show(friend_id):
    query = "SELECT * FROM friends WHERE id = :specific_id"
    data = {'specific_id': friend_id}
    friends = mysql.query_db(query, data)
    return render_template('index.html', one_friend=friends[0])

app.run(debug=True)
