from flask import Flask, request, redirect, render_template, session,flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
import md5
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'loginRegistrationDB')

@app.route('/')
def index():
    query = "SELECT *FROM users"
    users = mysql.query_db("SELECT * FROM users")
    return render_template('index.html', users = users)

@app.route('/login')
def showlogin():
    return render_template('login.html')

@app.route('/success')
def showsuccess():
    return render_template('success.html')

@app.route('/register', methods = ['post'])
def register():
    first_name = request.form['first_name']
    last_name = request.form['last_name']
    email = request.form['email']
    pw1 = request.form['pw1']
    pw2 = request.form['pw2']

    if len(first_name) < 2:
        flash("name should be at least 2 characters", "name_error")
        return redirect('/')
    
    if len(last_name) < 2:
        flash("name should be at least 2 characters","name_error")
        return redirect('/')

    #validate email
    if len(email) < 1:
        flash("Email is not valid!", "email_error")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!", "email_error")
        return redirect('/')
       
    #validate password
    if pw1 < 8:
        flash ("password should be at least 8 characters","password_error1")
        return redirect('/')
    elif pw1 != pw2:
        flash ("password does not match","password_error2")
        return redirect('/')
    else:
        password = md5.new(request.form['pw1']).hexdigest()
    
    #pass user register info to database
    insert_query = "insert into users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, now(), now())"
    query_data = {
        'first_name': first_name,
        'last_name': last_name,
        'email': email,
        'password': password
        }
    mysql.query_db(insert_query, query_data)
    return redirect('/success')

@app.route('/login', methods =['post'])
def login():
    password = md5.new(request.form['password']).hexdigest()
    email = request.form['email']
    user_query = "SELECT * FROM users where users.email = :email AND users.password = :password"
    query_data = { 'email': email, 'password': password}
    user = mysql.query_db(user_query, query_data)

    if len(user) > 0 and user[0]['password'] == password:
            return render_template("success.html")

        flash("email and password didn't match")
        return redirect("/login")

app.run(debug=True)

    


    