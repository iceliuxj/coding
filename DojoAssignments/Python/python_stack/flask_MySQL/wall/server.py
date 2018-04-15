from flask import Flask, request, redirect, render_template, session,flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
import md5
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'Wall')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods = ['get','post'])
def process():
    if request.form['action'] == 'register':
        insert_query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': md5.new(request.form['pw1']).hexdigest()
        }

        # check if a user already been registered!
        check = "SELECT email FROM users"
        email = request.form['email']
        first_name = request.form['first_name']
        last_name = request.form['last_name']
        pw1 = request.form['pw1']
        pw2 = request.form['pw2']
        for key in (mysql.query_db(check)):
            if key['email'] == email:
                flash("Email already been registered!","email_exist_error")
                return redirect('/')
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
        if len(pw1) < 8:
            flash ("password should be at least 8 characters","password_error1")
            return redirect('/')
        elif pw1 != pw2:
            flash ("password does not match","password_error2")
            return redirect('/')
        else:
            password = md5.new(request.form['pw1']).hexdigest()
            mysql.query_db(insert_query, data)

            query = "select * from users where users.email = :email"
            data = {'email': request.form['email']}
            users = mysql.query_db(query, data)
            user = users[0]
            session['login_id']= user['user_id']
            session['first_name'] = user['first_name']
            session['last_name'] = user['last_name'] 
            return redirect('/wall' )
        
    elif request.form['action'] == 'login':
        print 'hello'
        query = "SELECT * FROM users where users.email = :email"
        data = { 'email': request.form['email']}
        print request.form
        user = mysql.query_db(query, data)
        if len(user) > 0 and user[0]['password'] == md5.new(request.form['password']).hexdigest():
            print user[0]
            session['login_id'] = user[0]['user_id']
            session['first_name'] = user[0]['first_name']
            session['last_name']= user[0]['last_name']
            print session['login_id']
            return redirect("/wall")
        flash("email and password didn't match", "login_error")
        return redirect('/')

@app.route('/wall', methods= ['get','post'])
def Post():
    message_query = "SELECT messages.message_id, messages.user_id, messages.message, messages.created_at, CONCAT(first_name, ' ', last_name) AS full_name FROM messages JOIN users ON messages.user_id = users.user_id ORDER BY messages.message_id DESC"

    messages = mysql.query_db(message_query)

    comment_query = "SELECT comments.comment_id, comments.message_id, comments.user_id, comments.comment, comments.created_at, CONCAT(first_name, ' ', last_name) AS full_name FROM comments JOIN users ON comments.user_id = users.user_id JOIN messages ON comments.message_id = messages.message_id ORDER BY comments.comment_id DESC"

    comments = mysql.query_db(comment_query)
    print messages
    return render_template('wall.html', messages = messages, comments = comments)

@app.route('/logoff')
def logoff():
    session.clear()
    return redirect('/')

@app.route('/message', methods = ['get','post'])
def PostMessage():
    message_query = "Insert into messages (message, created_at, updated_at, user_id) VALUES (:message, now(), now(), :user_id)"
    data = {
        'message': request.form['message'],
        'user_id': session['login_id']
    }
    messages = mysql.query_db(message_query,data)
    return redirect('/wall')

@app.route('/delete_message', methods=['get', 'post'])
def delete_message():
    comments_query = "DELETE FROM comments WHERE comments.message_id = :message_id"
    message_query = "DELETE FROM messages WHERE messages.message_id = :message_id"
    data = {
        'message_id': int(request.form['get_message_id'])
    }
    mysql.query_db(comments_query, data)
    mysql.query_db(message_query, data)
    return redirect('/wall')

@app.route('/comment', methods = ['get', 'post'])
def Comment():
    comment_query = "Insert into comments (comment, created_at, updated_at, user_id, message_id) VALUES (:comment, now(), now(), :user_id, :message_id)"
    print "kkkk"
    print request.form['get_message_id']
    data = {
        'comment': request.form['comment'],
        'user_id': session['login_id'],
        'message_id':request.form['get_message_id']
    }
    comments = mysql.query_db(comment_query,data)
    return redirect('/wall')

app.run(debug=True)

    


    