var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();

var HOST = '0.0.0.0';
var PORT = 8000;

var fs = require('fs');
var configJSON = JSON.parse(fs.readFileSync('apiGitHub.json', 'utf8'));

require('./routes/gitHubApi')(express, app,
    bodyParser, request, configJSON);

require('./routes/errorHandler')(express, app);

var server = app.listen(PORT, HOST, function () {
    console.log('Server Listening on ' + server.address().address + ':'
        + server.address().port);
});