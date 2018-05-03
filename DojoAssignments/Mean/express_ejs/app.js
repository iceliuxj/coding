let express = require('express');
let app = express();

app.use(express.static(__dirname + "/static"));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');


app.get('/cars', function(request, response){

    response.render('cars');
})

app.get('/cats', function(request, response){
    response.render('cats');
})

app.get('/cat1', function(request, response){
    cat = {
        name: 'cat1',
        img: 'images/cat1.jpg',
        favorite_food: 'Spaghetti',
        age: '3',
        sleeping_spot: ['under the bed','on tree']
    };
    response.render('details', cat);
})

app.get('/cat2', function(request, response){
    cat = {
        name: 'cat2',
        img: 'images/cat2.jpg',
        favorite_food: 'hotdog',
        age: '2',
        sleeping_spot: ['on the bed', 'on sofa']
    };
    response.render('details', cat);
})

app.get('/cat3', function(request, response){
    cat = {
        name: 'cat3',
        img: 'images/cat3.jpg',
        favorite_food: 'pizza',
        age: '4',
        sleeping_spot: ['under the bed', 'on sofa']
    };
    response.render('details', cat);
})

app.get('/cars/new', function(request, response){
    response.render('newcar');
})

app.listen(8000);
console.log("Running in localhost at port 8000");

