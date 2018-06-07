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
    if (req.session.count){
        req.session.count =+ 2;
        res.render('index', req.session.count);
    }
    else {
        req.session.count = 1;
        res.render('index', req.session.count)
    }
})

app.post('/process', function(req,res){
    req.session.count += 2;
    res.redirect('index');
})

app.listen(5000);
console.log("Running in localhost at port 5000");