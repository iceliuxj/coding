const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-Parser');
const session = require('express-session');
var server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


server.listen(8000);
console.log("Running in localhost at port 8000");


// var io = require('socket.io').listen(app);

app.get('/', function(req,res){
    res.render('index')
})

var users = {}

io.sockets.on('connection', function(socket){
    socket.on('registerUser', function(registration){
        var username = registration.name;
        users[socket.id]=username;
        io.emit('msg', {msg:`${username} has joined the room`});
    });

    socket.on('msg', function(message){
        var username = users[socket.id]
        io.emit('msg',{msg:`${username} says: ${message.message_text}`});
    })

    socket.on('disconnect', function(){
        console.log(`${socket.id} disconnected`);
    })
});