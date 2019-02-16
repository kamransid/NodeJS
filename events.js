var events = require('events')

var eventEmitter = new events.EventEmitter()
console.log(eventEmitter)

eventEmitter.on('fire', function(hero){
    console.log(`${hero} will save me `)
} )

eventEmitter.emit('fire', 'Bawal')