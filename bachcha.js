var person = {
    aadmin : function khilaona(){
        console.log('Yahi hoon mai')
    },
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language;
    },
    set lang(language){
        this.language = language
    }
  };
  
module.exports.kaha = person

console.log(person)
var awaj = {
    foo:'chalo'
}

module.exports.awara = awaj
console.log(awaj)