var express = require('express');
var app = express();

var bankAsiaVerifyController = require('./controllers/bankAsiaVerifyController');
bankAsiaVerifyController(app);

var contactApiController = require('./controllers/contactApiController');
contactApiController(app);

var phpApiController = require('./controllers/phpApis');
phpApiController(app);


app.listen(80, function () {
    console.log('Node server listening on port 3000!');
});

