// Function for computer selection
function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  const randomElement = options[Math.floor(Math.random() * options.length)];
  return randomElement;
}

// Function to filter player input and scan for valid input
function playerPlay() {
  let selection = prompt("Enter: Rock Paper or Scissors");
  selection =
    selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
  if (
    selection === "Rock" ||
    selection === "Paper" ||
    selection === "Scissors"
  ) {
    return selection;
  } else {
    return alert("Not a valid input");
  }
}

// Set variables for Computer and Player selections
let computerSelection = String(computerPlay());
let playerSelection = String(playerPlay());

console.log(playerSelection);
console.log(computerSelection);

// Logic to play round of rock paper scissors
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
//     return playRound(playerSelection, computerSelection);
//   }
// }

// console.log(game());

// // Loop the playerchoose function and store it in an array. then iterate through each index in the game() function ?

// let playerChoiceArray = [];

// for (let i = 0; i < 5; i++) {
//   playerChoiceArray.push(playerChoose());
//   console.log(playerChoiceArray);
// }
