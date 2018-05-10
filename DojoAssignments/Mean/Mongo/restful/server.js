// import {Mongoose} from 'mongoose';

const express= require('express');
const mongoo = require('mongoose');
const app= express();
app.use(express.static(__dirname + "/angularRest/dist/angularRest/"));



mongoo.connect('mongodb://localhost/restful');
mongoo.Promise = global.Promise;
const bp = require('body-parser');
app.use(bp.json());

const TaskSchema = new mongoo.Schema({
    title: {type: String, required:true},
    description: {type: String, default: ""},
    completed:{type: Boolean},
},{timestamps:true});

const Tasks = mongoo.model('tasks', TaskSchema);

app.get('/', function(req,res){
    res.json({success:"success!"})
})

app.get('/tasks', function(req,res){
    Tasks.find({},function (err,data){
        if (err){
            console.log('errors show');
            res.json(err);
        }
        else {
            console.log('no errors');
            res.json(data);
        }
    })
})

app.post('/tasks', function(req,res){
    let newtask = new Tasks({
        title : req.body.title,
        description : req.body.description,
    });
    newtask.save(function(err,data){
        if (err){
            console.log('errors right here');
            res.json(err)
        }
        res.json(data);
        // console.log('your data');
        // res.redirect('/tasks/'+ data._id);
    })
});

app.get('/tasks/:id', function(req,res){
    Tasks.findOne({_id: req.params.id}, function(err,data){
        if (err){
            console.log('errors');
            res.json(err);
        }
        else{
            console.log('no error to get id');
            res.json(data);
        }
    })
});

app.put('/tasks/:id', function(req,res){
    let updatedInfo={
        'title': req.body.title,
        'description': req.body.description,
        'completed': req.body.completed
    }
    Tasks.updateOne({_id:req.params.id}, updatedInfo, function(err,data){
        if(err){
            console.log('errr');
            res.json(err);
        }
        else{
            console.log('change a thig');
            console.log(data);
            res.json(data);
        }
    })
})

app.delete('/task/:id', function(){
    Tasks.deleteOne({_id:req.params.id},function(err,data){
        if (err){
            console.log('err');
            res.json(err);
        }
        else{
            console.log('perfect');
            res.json(data);
        }
    })
})

app.listen(8000, function(){
    console.log('here is the server');
})
