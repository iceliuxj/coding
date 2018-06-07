const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const validate = require('mongoose-validator')
const uniqueValidate = require('mongoose-unique-validator')
const bcrypt = require('bcrypt');

const app = express();
const SALT_WORK_FACTOR = 10;

app.use(bodyParser.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname,'./static')));
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({
    secret: 'secretkeyword',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}))

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/login_regis');

const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email address is required'],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    first_name: {type: String, minlength: 3, required:[true,'Input required']},
    last_name: {type: String, minlength: 3, required:[true,'Input required']},
    password: {
        type: String, 
        min: 8,
        required: [true, 'please fill a valid password with minimum 8 characters including at least one lowercase, one uppercase, and one special character'],
    },
    birthday:{type:Date, required:'Input required' }
});

userSchema.plugin(uniqueValidate,{message: 'Email already exists!'});
userSchema.pre('save', function(next){
    var user = this;
    if (!user.isModified('password')){
        return next()
    };
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if (err){
            return next(err);
        }
        else{
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err){ 
                    return next(err);
                }
                else{
                    console.log(user.password) 
                    user.password = hash;
                    console.log(user.password)
                    next();
                }
            });
        }
    });
});

mongoose.model('Users', userSchema); 
let User = mongoose.model('Users');

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);



app.get('/', function(req, res) {
    res.render('login');
})

app.get('/register', function(req,res){
    res.render('register');
})

app.post('/register', function(req,res){
    let user = new User({
        email : req.body.email,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        password : req.body.password,
        birthday: req.body.birthday
    })
    user.save(function(err){
        if(err){
            console.log(err)
            console.log("register_error");
            for(let key in err.errors){
                req.flash("register_error", err.errors[key].message)
                // console.log(register_error);
                console.log(err.errors[key].message);
            }
            res.redirect('/register')
        }
        else{
            console.log("SUCCESS")
            res.redirect('/')
        }
    })
})

app.post('/login', function(req,res){
    User = User.find({},function(err,data){
        if (err){
            for(let key in err.errors){
                req.flash("login_error", err.errors[key].message);
                res.redirect('/login');}
        }
        else {
            res.redirect('/')
        }

    })

})

app.listen(8000, function() {
    console.log("listening on port 8000");
})