const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-Parser');
const session = require('express-session');

const server = app.listen(5000);
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

var user = {}
io.sockets.on('connection',function(socket){
   socket.on('submit_info', function(data){
        console.log('hello');
        var user = [{
            name: data.name,
            location: data.location,
            language: data.language,
            comment: data.comment
        }];
        user1 = user[0];
        console.log(user[0]);
        var random_number = Math.floor(Math.random()* 1000)+ 1
        console.log(random_number);

        socket.emit('msg', { 
            msg:`$You emitted the following information to the server: Your name: ${JSON.stringify(user1)} .Your lucky number emitted by the server is ${random_number}` 
        }); 

    });
})

  
    

    // socket.on('posting_form', function (data) { 
    //    var random_number = Math.floor(Math.random()* 1000)+ 1
    //   console.log("Here is your random_number:" + random_number); //8 (note: this log will be on your server's terminal)
    // });


// app.post('/result', function(req,res){
//     let user = {
//         "name": req.body.name,
//         "location" : req.body.location,
//         "language": req.body.language,
//         "comment": req.body.comment
//     }
//     res.render('result', {user: user})
// })