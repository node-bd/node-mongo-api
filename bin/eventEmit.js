var events = require('events');

var util = require('util');

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('jaam');
var mary = new Person('marry');

var people = [james, mary];

people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'hey dude');
mary.emit('speak', 'i want curry');