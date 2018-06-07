const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-Parser');
const session = require('express-session');

const server = app.listen(6789);
const io = require('socket.io')(server);


// app.use(session({
//     secret: 'keyboardkitteh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
//   }))

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req,res){
    res.render('index');
});

io.sockets.on('connection',function(socket){
    socket.on('submit_info', function(){