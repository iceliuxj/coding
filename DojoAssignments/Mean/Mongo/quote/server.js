const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParse = require ('body-parser');

app.use(express.static(__dirname + '/quote/dist/quote'));
app.use(bodyParse.json());

mongoose.connect ('mongodb://localhost/authors')
let quoteSchema = new mongoose.Schema({
    quote : {type: String, minlength: [3, "quotes should be at least 3 characters"]},
    vote: {type: Number, default: 0}
}, {timestamps:true});

mongoose.model('quote', quoteSchema);
let quotes = mongoose.model('quote')
let authorSchema = new mongoose.Schema({
    name : {type: String, minlength: [3, "name should be at least 3 characters"], required: [true, "input required!"]},
    quote : [quoteSchema]}, 
{timestamps:true});

mongoose.model('author', authorSchema);
let authors = mongoose.model('author')

app.get('/main', function(req,res){
    authors.find({}, function(err,data){
        if (err){
            console.log(err);
            res.json(err);
        }
        else {
            res.json(data);
        }
    })
})

app.get('/view/:id', function(req,res){
    authors.findOne({_id: req.params.id}, function(err,data){
        if (err){
            console.log(`get quotes err`);
            res.json(err);
        }
        else {
            console.log(`get quotes successfully`);
            res.json(data);
        }
    })
})

app.post('/newquote/:id', function(req,res){
    console.log(`enter quote route`)
    quotes.create({quote: req.body.quote}, function(err,data){
        if (err){
            console.log(err);
            res.json(err);
        }
        else {
            console.log('======',data)
            authors.findOneAndUpdate({_id: req.params.id}, {$push: {quote: data}}, function(err, data){
                if (err){
                    console.log(`errs happened when a new quote add to author`)
                    res.json(err);
                }
                else {
                    res.json(data);
                }
            })
        }
    })
})

app.post('/newauthor', function(req,res){
    authors.create({name: req.body.name}, function(err,data){
        if(err){
            console.log(err); 
            console.log(err['errors']['name']['properties']['message'])
            // let result = {
            //     status: "Not good",
            //     errors: err['errors']['name']['properties']['message']
            // }
            res.json(err);          
        }
        else {
            res.json(data);
        }
    })
})

app.put('/edit/:id', function(req,res){
    authors.update({_id : req.params.id}, {name : req.body.name}, function(err,data){
        if (err){
            console.log(err['errors']['name']['properties']['message'])
            res.json(err);
        }
        else {
            res.json(data);
        }
    })
})

// app.delete('/delete/:id', function(req,res){
//     authors.deleteOne({_id : req.params.id}, function(err,data){
//         if (err){
//             console.log('this is delete err')
//             res.json(err);
//         }
//         else{
//             console.log('delete without err')
//             res.json(data);
//         }
//     })
// })

app.listen(5000,function(errs){
    console.log('server is running')
})
