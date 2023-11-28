const events = require('events');
const util = require('util');

const myEvent = new events.EventEmitter();

// creating our custom event
myEvent.on('printMsg', (msg = `If there is no argument, this event msg will print.`) => {
    console.log(msg);
});
// emitting our custom event
myEvent.emit('printMsg', `Argument is provided so printing this event msg.`);

/**
 *  Inheriting the EventEmitter
 */

const Person = function(name) {
    this.name = name;
}

// with util module we are inheriting the event emitter
util.inherits(Person, events.EventEmitter);

const Elsa = new Person("Elsa");
const Pete = new Person("Pete");
const Gates = new Person("Gates");
const personArr = [Elsa,Pete,Gates];
// mapping array in order to set message and emit event
personArr.map((Persons) => {
    Persons.on('displayInfo', function(msg) {
        console.log(`${Persons.name} likes ${msg}`);
    });
    // we are emitting event for the array list.
    Persons.emit('displayInfo','Mocha');
});

Elsa.emit('displayInfo','Latte');