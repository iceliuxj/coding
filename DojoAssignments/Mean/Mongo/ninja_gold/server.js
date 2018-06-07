const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/ninja/dist/ninja'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/ninja_gold')
let scoreSchema = new mongoose.Schema({
    user: {type: String, required:[true, "username is required"]},
    score: {type: Number, required: true}
}, {timestamps: true})

mongoose.model('HighScores', scoreSchema);
let scores= mongoose.model('HighScores')

app.get('/top10', function(req,res){
    scores.find({},null, {sort: {score: 'descending'}, limit: 10}, function(err,data){
        if (err){
            console.log(err);
            res.json(err);
        }
        else {
            res.json(data);
        }
    })
})

app.post('/scores', function(req,res){
    scores.create({user: req.body.user, score: req.body.score}, function(err,data){
        if(err){
            console.log(err);
            console.log(err['errors']['user']['properties']['message'])//['user']['message']
            let result = {
                status: "Not good",
                errors: err['errors']['user']['properties']['message']
            }
            res.json(result);
        }
        else {
            res.json(data);
        }
    })
})

app.listen(8000, function(errs){
    console.log("sever is running")
})