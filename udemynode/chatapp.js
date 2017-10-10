var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');

// static files
// localhost:80/assets/style.css
app.use(express.static('./public'));
app.use(cookieParser);

require('./routes/routes')(express, app);

app.listen(80, function () {
    console.log("Server Listening on port 80");
});