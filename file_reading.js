var fs = require('fs')

// console.log(fs.constants.S_IRWXG)

// var data = fs.readFileSync('input.txt', function(err, data){
//    if(err){
//        console.log(err)
//    }
//    else{
//        console.log(data)
//    }
// })
// console.log('****End of console******')

fs.readFile('input.txt', function(err, data){
    if(err)
    console.log(err)
    else
    console.log(data)
})
console.log('******End of console*******')