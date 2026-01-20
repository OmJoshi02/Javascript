let input = parseInt(prompt("Enter your number : "))

let random = Math.floor(Math.random()*10)

if(input > random){
    alert("Your number is greater than guessed number")
}
else{
    alert("Your number is smaller than guessed number")
}