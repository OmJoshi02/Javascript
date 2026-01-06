//Numbers can represented as - 

//Numbers manipulation
const score = 100

const balance = new Number(100) //this is 100% number because we use Number constructor

console.log(score); // 100
console.log(balance); // [Number: 100]

console.log(balance.toString().length); //convert into string and then we can use string functions on it
console.log(balance.toFixed(2)); //It adds decimal points with mentioned number eg. 100.00

const num = 28.6300
console.log(num.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//Maths library 

console.log(Math.PI);
console.log(Math.abs(-4)); //converts negative value to positive, positive remains positive
console.log(Math.round(3.4)); //if value < 3.5 then 3 else 4
console.log(Math.ceil(5.2)); //6
console.log(Math.floor(4.9)); //4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
 
console.log(Math.round(Math.random()*10) + 1); //Math.random gives value between 0 to 1

//suppose I want value between 1 to 6 

const min = 1
const max = 6

console.log(Math.round(Math.random()*(max-min+1))+min)








