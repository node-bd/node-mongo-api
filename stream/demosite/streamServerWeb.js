var http = require('http'),
    host = 'localhost',
    fs = require('fs'),
    path = require('path'),
    port = '9000';

var contentType = {
    ".htm" : "text/html",
    ".css" : "text/css",
    ".js"  : "text/javascript",
    ".gif" : "image/gif",
    ".jpg" : "image/jpeg",
    ".png" : "image/png"
};

var server = http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('<h1>Hello World</h1>');
    var filepath = (req.url === '/') ? ('./index.html') : ('.' + req.url);
    fs.exists(filepath, function (file_exists) {
        if(file_exists){
            // Read and Serve Whole File
            // fs.readFile(filepath, function (error, content) {
            //     if(error){
            //         res.writeHead(500);
            //         res.end();
            //     }else{
            //         //res.writeHead(200, {'Content-Type' : contentType});
            //         res.end(content, 'utf-8');
            //     }
            // })

            // Another way to stream file serve

            var streamFile = fs.createReadStream(filepath).pipe(res);
            // streamFile.on('error', function () {
            //     res.writeHead(500);
            //     res.end();
            // })

        } else{
            res.writeHead(444);
            res.end("Sorry We Could Not find The file");
        }
    })
}).listen(port, host, function () {
    console.log('Server Running on Http://' + host + ':'
        + port);
});


































