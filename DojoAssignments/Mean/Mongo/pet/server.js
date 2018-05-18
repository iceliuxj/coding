const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParse = require ('body-parser');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

app.use(express.static(__dirname + '/client/dist/client'));
app.use(bodyParse.json());

mongoose.Promise = global.Promise;
mongoose.connect ('mongodb://localhost/pets')
let petSchema = new mongoose.Schema ({
    _id: Schema.Types.ObjectId,
    name: { type: String, required: [true, 'name is required'], min: [3, 'Input should be more than 3 characters'], unique: [true, 'This name already exists'], dropDups: true }, 
    type: { type: String, required: [true, 'type is required'], mim: [3, 'Input should be more than 3 characters']},
    desp : { type: String, required: [true, 'Input should be more than 3 characters']},
    skill: { type: String, default: ''},
    skill2: { type: String, default: ''},
    skill3: { type: String, default: ''},
    likes: {type: Number, default: 0}
},{timestamps:true});

petSchema.plugin(uniqueValidator, {message: 'The {PATH} {VALUE} already exist.'});
mongoose.model('pet', petSchema);
let pet = mongoose.model('pet');


app.get('/home', function(req,res){
    pet.find({}, function(err,data){
        if (err){
            console.log(err);
            res.json(err);
        }
        else {
            res.json(data);
        }
    })
})

app.post('/new', function(req, res){
    console.log(`add new pet here`);
    console.log(req.body);
    let pets = new pet(req.body);
    pets._id = new mongoose.Types.ObjectId();
    
    pets.save(function(err,data){
        if (err){
            console.log(`errs happened when add a new pet`);
            res.json({message : 'Error', error: err});
        }
        else {
            res.json({message: "Success", pet: data});
        }
    })

})

app.get('/detail/:id', function(req,res){
    const ObjectId = mongoose.Types.ObjectId;
    pet.find({_id: new ObjectId(req.params.id)}, function(err, data){
        if (err){
            console.log(err);
            res.json({message: 'error', error: err});
        }
        else {
            res.json({message : 'Success', data : data});
        }
    })
})

app.post('/detail/like/:id', function(req, res){
    console.log(req.body);
    const ObjectId = mongoose.Types.ObjectId;
    pet.findOne({_id: new ObjectId(req.params.id)},function(err,data){
        if (err) {
            console.log(err);
            res.json({message: "Error to find the pet", error: err})
        } else {
            console.log('success to like this pet')
            data.likes = parseInt (data.likes) + 1;
            data.save (function(err2, data2) {
                if (err2){
                    res.json ({ message: 'error to add likes', error: err2});
                } else {
                    res.json({message: 'Success', data: data2});
                }
            });
        }
    });
})

app.delete('/detail/:id', function(req,res){
    console.log(req.params.id);
    const ObjectId = mongoose.Types.ObjectId;
    pet.deleteOne({_id: new ObjectId(req.params.id)},function(err,data){
        if (err) {
            console.log(err);
            res.json({message: "Error to adopt the pet", error: err})
        } else {
            console.log('this pet has been adopted')
            res.json({message: "Success"});
        }
    });
})

app.put('/edit/:id', function(req, res){
    console.log('here is the edit pet page')
    const query = {'_id': req.params.id};
    console.log(req.body);
    pet.findByIdAndUpdate(query, {
        name: req.body.name,
        type: req.body.type,
        desp: req.body.desp,
        skill: req.body.skill,
        skill2: req.body.skill2,
        skill3: req.body.skill3
        }
        , { runValidators: true, context: 'query',}, function(err, data){
        if(err) {
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Success", data: data});
        }
    });
})



app.listen(5000, () => {
    console.log("listening on port 5000");
})