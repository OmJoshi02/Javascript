const a = "hello"
const b = " world"
console.log(a + b)

const name = "Om"
const salary = 1000000

console.log(`Hello my name is ${name} and salary is ${salary} `); //String interpolation (backticks - ` `)

//string indexing
console.log(a[0])


//functions for string

console.log(a.toUpperCase()); // convert string to uppercase
console.log(a.toLowerCase()); // convert string to lowercase
console.log(a.charAt(3)); // shows charater at given index
console.log(a.indexOf('o')); //shows index of given character


const x = new String("hitesh-hc")
const newgame = x.substring(0,4) // substring prints characters from 0 to n-1
console.log(newgame);

const anotherstring = x.slice(-8, 4) //this is slicing method from 0 to n-1
console.log(anotherstring);

const trimstring = "   om   "
console.log(trimstring.trim()); //it removes whitespaces

const url = "https://google.com"
console.log(url.replace("google", "facebook"));

console.log(url.includes("google"));
console.log(url.includes("facebook"));

const y = "This is javascript tutorial"
console.log(y.split(' '));
