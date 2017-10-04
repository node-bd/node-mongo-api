var http = require('http');

var server = http.createServer(function (req, res) {
    console.log('Server Running on 80 port');


    http.get({
        hostname: 'localhost',
        port: 80,
        path: '/api',
        agent: false  // create a new agent just for this one request
    }, (res) => {
        res.send('Hello jello');
    });

});


server.listen(80);