var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    if (req.url == '/home' || req.url == '/') {
        myReadStream.pipe(res);
    } else if (req.url == '/api/json') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var myObj = [{
            name: 'amran',
            age: 25,
            address: 'Dhakas, Gazipur'
        }, {
            name: 'rifat',
            age: 26,
            address: 'Dhakas, Narsingdi'
        }
        ]
        res.end(JSON.stringify(myObj));
    } else {
        res.end('<h1>You are not able to get any response!!!</h1>');
    }
});

var port = 80;

server.listen(port, '127.0.0.1');
console.log('Listening to port ' + port);