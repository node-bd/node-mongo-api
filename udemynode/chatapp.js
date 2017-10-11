var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var cors = require('cors');

app.set('view engine', 'ejs');

// static files
// localhost:80/assets/style.css
app.use(express.static('./public'));

// Takes a lot of time to get response
// If uncommented this line
// app.use(cookieParser);

app.get('/', function (req, res, next) {
    var data = {pageTitle: 'Page Title'};
    res.render('index', {data: data});
});

require('./routes/routes')(express, app);
require('./routes/smroutes')(express, app);

app.use(cors());

// For any other routes
app.use(function (req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.render('404', {url: req.url});
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({error: 'Not found'});
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});


app.listen(80, '0.0.0.0', function () {
    console.log("Server Listening on port 80");
});