var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');


var quotesSchema = new mongoose.Schema({
    name: {type: String, required:true},
    quote: {type: String, required:true},
    date:{type:Date, default: Date.now}
});
   mongoose.model('Quotes', quotesSchema); 
   var Quote = mongoose.model('Quotes') 
   
// Routes
// Root Request
app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes',function(req,res){
    Quote.find({}, function(err,quotes){
        if (err){
            console.log('something went wrong');
        }
        else{
        res.render('quotes',{quotes: quotes});
        }
    })
}) 

app.post('/quotes', function(req, res) {
    if (req.body.one){
        console.log('I am here!')
        console.log("POST DATA", req.body);
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        console.log (quote);
   
        quote.save(function(err) {
        if(err) {
            console.log('something went wrong');
        } else { 
            console.log('successfully added a quote!');
            res.redirect('/quotes');
            }
        })
    }
    else {
        res.redirect('/quotes')
    }
})

  
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
