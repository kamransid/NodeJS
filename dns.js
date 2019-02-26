// var dns = require('dns')
// var fs = require('fs')
// var b = require('./bachcha')
// var pi = require('domain')
// console.log(pi)
// //console.log(b)
// //console.log(fs)
// b.faltu = 'aadmi'
// console.log(b)
// //console.log(dns)



var dns = require('dns')

dns.lookup('iana.org', (err, address, family)=>{
    if(err)
    console.log(err)
    else
    console.log('address: %j family: IPv%s', address, family);  
})