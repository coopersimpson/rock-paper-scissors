function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  const randomElement = options[Math.floor(Math.random() * options.length)];
  return randomElement;
}

// Set computer selection
let computerSelection = computerPlay();

// Player chooses selection
let choice = prompt("Enter: Rock Paper or Scissors");
let playerSelection =
  choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

console.log(playerSelection);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log(`You win ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    console.log(`You lose ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log(`You win ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    console.log(`You lose ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log(`You win ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    console.log(`You lose ${computerSelection} beats ${playerSelection}`);
  } else {
    console.log(`Its a tie, ${playerSelection} ties with ${computerSelection}`);
  }
}

console.log(playRound(playerSelection, computerSelection));

// //loop with a function that calls playRound, game of 5

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound(playerSelection, computerSelection);
//   }
// }

// how to prompt input on each loop through?
