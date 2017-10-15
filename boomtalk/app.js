var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

var HOST = '0.0.0.0';
var PORT = 8000;

require('./routes/boomtalkapi')(express, app,
    bodyParser, request);
require('./routes/gitHubApi')(express, app,
    bodyParser, request);
require('./routes/errorHandler')(express, app);


app.listen(PORT, HOST, function () {
    console.log('Server Listening on ')
});