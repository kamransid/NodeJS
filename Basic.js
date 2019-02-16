f = require('events')
u = require('util')
console.log('Hello World')
class Foo{
    constructor(){
        this.name = 'Kajal'
        console.log('HI')
    }
}

f = new Foo()

u.inherits(Foo, f.EventEmmiter)
