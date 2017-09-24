var events = require('events');


var myEmitter = new events.EventEmitter();

myEmitter.on('newEvent', function (message) {
    console.log(message);
});