var server  = require('net').createServer(),
    sockets = [];

server.on('connection', function (socket) {
    console.log('New Connection');
    sockets.push(socket);

    socket.on('data', function (data) {
       console.log('Got Data: ' + data);

        sockets.forEach(function (otherSocket) {
            if(otherSocket != socket){
                otherSocket.write(data);
            }
        });
    });

    socket.on('close', function () {
        console.log('Connection Closed');
        var index = sockets.indexOf(socket);
        sockets.splice(index, 1);
    });

});

server.on('error', function (err) {
    console.log('Server Error ' + err.message);
});

server.on('close', function () {
    console.log('Server is Closed');
});

server.listen(4000);