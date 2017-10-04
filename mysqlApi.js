var express = require('express');
var app = express();


var mysqlController = require('./controllers/mysqlController');
mysqlController(app);


app.listen('80', function () {
   console.log('Node Running on port 80');
});
