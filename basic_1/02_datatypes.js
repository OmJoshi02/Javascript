"use strict"; //Treat all code as newer version

// alert(3+3) // we're using nodejs it won't work here as directly work in browser console
console.log(3+3)
console.log("Om")


//Non premitive type
const heros = ["Ironman", "Hulk", "Thor"]

let obj = {

    name : "Om",
    age : 20
}

const myfun = function(){
    console.log("Hello world");
    
}

myfun()

console.log(typeof(heros)); //object
console.log(typeof(obj)); //object
console.log(typeof(myfun)); //function


