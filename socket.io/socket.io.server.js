var app = require('http').createServer();
var io = require('socket.io')(app);

app.listen(8000);

io.on('connection', function (socket) {
    socket.emit('alert', 'hello from server :)');

    socket.emit('name', 'hello socket.io js :) ' +
        Math.random());

    socket.on('color', function () {
        // emit to all client except the initiator
        // client
       socket.broadcast.emit('color', 'orange');
    });

    socket.on('click', function (data) {
       console.log(data);
    });

    socket.on('disconnect', function () {
       console.log('1 client disconnected');
        io.emit('dismessage', 'user disconnected');
    });
});