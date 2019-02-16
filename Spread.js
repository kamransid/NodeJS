const failta = {
    foo:'hala',
    bol:'kuch',
    mehnat:'aadmi',
    bholu:'data',
    chalo: {
        bhail:'tum',
        mai:'hua',
        aadmi:'khilona'
    }
}

const copy = {
    ...failta
}
console.log(copy)

mai = copy
tum = [copy.bholu]
console.log(mai, tum)
console.log(mai)
console.log(tum)
hmm = failta.chalo
console.log(hmm)
hmm = [failta.chalo]
console.log(hmm)