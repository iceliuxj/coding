let express = require('express');
let path = require('path');
let bodyParser = require('body-Parser');
let session = require('express-session');

let app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req,res){
    res.render('index');
});

app.post('/result', function(req,res){
    let user = {
        "name": req.body.name,
        "location" : req.body.location,
        "language": req.body.language,
        "comment": req.body.comment
    }
    res.render('result', {user: user})
})

app.listen(8000);
console.log("Running in localhost at port 8000");