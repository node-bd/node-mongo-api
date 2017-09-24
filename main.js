var express = require('express');


var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('This is home page');
});

app.get('/home', function (req, res) {
    res.send('This is also home page');
});

app.get('/profile/:id', function (req, res) {
    var data = {
        age: 25,
        job: 'Ninja'
    };
    res.render('profile', {person: req.params.id, data: data});
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('echoejs', {data: req.body});
});


app.get('/contact', function (req, res) {
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.get('/contact/curlpost', function (req, res) {
    console.log(req.query);
    res.render('contact', {qs: req.query});
});



app.listen(80);