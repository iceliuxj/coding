var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var session = require('express-session');
var flash = require('express-flash');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dashboard_mongoose');

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({
    secret: 'secretkeyword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

var AnimalSchema = new mongoose.Schema({
    name: {type: String, required:true}
});
   mongoose.model('Animals', AnimalSchema); 
   var Animal = mongoose.model('Animals') 
   
app.get('/', function(req, res) {
    animals = Animal.find({}, function(err, animals){
        if(err){
            console.log('something went wrong');
            res.redirect('/')
        }
        else{
            res.render('index', {'animals': animals});
        }
    })
})

app.get('/mongooses/new', function(req,res){
    res.render('mongooses_new');
})

app.post('/mongooses', function(req, res) {
        console.log('I am here!')
        console.log("POST DATA", req.body);
        var animal = new Animal({name: req.body.animal});
        console.log (animal);
   
        animal.save(function(err,animal) {
        if(err) {
            console.log('something went wrong');
            for (key in err.errs){
                req.flash("input_error", err.errs[key].message);
                }
            res.redirect('/mongooses/new')
        } else { 
            console.log('successfully added an animal!');
            res.redirect('/');
        }
    })
})

  
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})