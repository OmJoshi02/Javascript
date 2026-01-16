let ageInput = prompt("Enter your age : ")

let age = Number(ageInput)

let message = ""

if(age >= 21){
    message = "you may enter the venue and purchase alcohol"
}
else if(age >= 19){
    message = "you may enter the venue, but you cannot purchase alcohol"
}
else{
    message = "Sorry, you are not allowed to enter the value"
}

console.log(message);
