function sayMyName(){
    console.log("Hello");
    
}

// sayMyName()

function addTwoNumbers(a,b){
    return a+b;
}

// console.log(addTwoNumbers(2,3));


function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(200,300,400,500)); //returns array which scales dynamically


const info = {
    username : "Om",
    price : 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
}

handleObject(info)


const myNewArray = [1,2,3,4,5]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
