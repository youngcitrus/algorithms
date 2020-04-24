const EventEmitter = require('events');

const emitter = new EventEmitter();

function logTestMessage(){
    console.log('test event logged');
}

emitter.on('testEvent', logTestMessage);

emitter.once('onlyOnce', function(){
    console.log('once but not twice');
})

emitter.emit('onlyOnce');
emitter.emit('testEvent');
emitter.emit('onlyOnce');
emitter.emit('testEvent');
emitter.off('testEvent', logTestMessage);

emitter.emit('testEvent');