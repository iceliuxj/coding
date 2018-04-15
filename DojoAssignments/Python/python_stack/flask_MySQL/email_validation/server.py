from flask import Flask, request, redirect, render_template, session,flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
mysql = MySQLConnector(app,'emailDB')
app.secret_key = "ThisIsSecret!"

@app.route('/')
def index():
    query = "SELECT *FROM emails"
    emails = mysql.query_db("SELECT * FROM emails")
    # print "hello"
    # print emails
    return render_template('index.html', emails = emails)

@app.route('/emails', methods=['POST'])
def submit():
    if len(request.form['email']) < 1:
        flash("Email is not valid!")
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
    else:
        query = "insert into emails (email, created_at) VALUES (:email, now())"
        data = {
        'email': request.form['email'],
        }
        mysql.query_db(query, data)
        return redirect('/success')
    return redirect('/')

@app.route('/update_email/<email_id>', methods = ['POST'])
def update(email_id):
    query = "UPDATE friends SET email = :email, created_at = Now(), Where id = :id"
    data = {
        'email': request.form['email'],
        'id': email_id
    }
    mysql.query_db(query,data)
    return redirect('/')
    

@app.route ('/success')
def show():
    flash("The email address you entered (__) is a VALID email address! Thank you!")
    emails = mysql.query_db("SELECT * FROM emails")
    return render_template('success.html', emails =emails)

app.run(debug=True)