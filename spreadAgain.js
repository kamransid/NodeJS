var obj = {
    kaha:'kuch',
    kaluu:{
        hajari:'pahle',
        sua: function(){
            console.log('Kiaaaaaaaa')
        }
    }
}

var obj2 = {
    ...obj,
    hajari:'kuch Bhi'
}
console.log([obj2])