// Randomly returns Rock, Paper or Scissors
function computerPlay () {
    const weapon = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * weapon.length);
    return(random, weapon [random]);
}

//computerSelection from function
const computerSelection = computerPlay();

// playerSelection from html
let playerSelection = prompt("Rock, paper, or scissors?");

// Plays a round
function playRound(playerSelection, computerSelection) {

}