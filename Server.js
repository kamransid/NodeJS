var http = require('http')

// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type': 'text/plain'})
//     res.end('Hello Bhai log\n')
// }).listen(8080)

var server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hi')
})

server.listen(8080)