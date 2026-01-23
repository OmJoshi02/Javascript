const arr = ["rock", "paper", "scissor"];

let input = prompt("Enter your choice: rock, paper, scissor").toLowerCase();
let random = Math.floor(Math.random() * 3);
let computer = arr[random];

alert("Computer chose: " + computer);

if (input === computer) {
    alert("It's a draw!");
}
else if (
    (computer === "rock" && input === "paper") ||
    (computer === "paper" && input === "scissor") ||
    (computer === "scissor" && input === "rock")
) {
    alert("You win 🎉");
}
else {
    alert("Computer wins 🤖");
}
