let answers = [
  "Yes, definitely",
  "It is certain",
  "Without a doubt",
  "Ask again later",
  "Cannot predict now",
  "Better not tell you now",
  "Don't count on it",
  "Very doubtful"
];

function eightball(){
    let random = Math.floor(Math.random() * answers.length)
    // console.log();
    alert(`8 balls says : ${answers[random]}`)
}

let question = prompt("Ask your question : ")

if(question){
    eightball()
}
else{
    console.log("Ask question");
    
}