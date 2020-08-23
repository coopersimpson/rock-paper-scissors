/* MAIN EXECUTION BLOCK */

let playerScore = 0;
let computerScore = 0;
var i = 0;

document.querySelector('button').onclick = function() {
    console.log("Welcome to Rock Paper Scissors!");
    for(i = 0; i < 5; i++) {
        game();
    }  
    if (playerScore > computerScore) {
        console.log(`You win! Your score: ${playerScore} CPU score: ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`You lose. Your score: ${playerScore} CPU score: ${computerScore}`);
    }
    else {
        console.log(`Tie. Your score: ${playerScore} CPU score: ${computerScore}`);
    }
    playerScore = 0;
    computerScore = 0;
}

/* MAIN GAME LOOP */
function game() {
    let playerSelection = prompt("Rock, paper, or scissors?");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

// Randomly returns Rock, Paper or Scissors
function computerPlay () {
    const weapon = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * weapon.length);
    return(random, weapon [random]);
}

//computerSelection from function
const computerSelection = computerPlay();

// playerSelection from html
// let playerSelection = prompt("Rock, paper, or scissors?");

// Plays a round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let results;
        if (playerSelection == 'rock') {
            switch(computerSelection) {
                case 'rock':
                    results = '(You: rock -- CPU: rock) TIE';
                    break;
                case 'paper':
                    results = '(You: rock -- CPU: paper) LOSS';
                    computerScore++;
                    break;
                case 'scissors':
                    results = '(You: rock -- CPU: scissors) WIN'
                    playerScore++;
                    break;
            }
            return results;
        }
        else if (playerSelection == 'paper') {
            switch(computerSelection) {
                case 'rock':
                    results ='(You: paper -- CPU: rock) WIN';
                    playerScore++;
                    break;
                case 'paper':
                    results = '(You: paper -- CPU: paper) TIE';
                    break;
                case 'scissors':
                    results = '(You: paper -- CPU: scissors) LOSS';
                    computerScore++;
                    break;
            }
            return results;
        }
        else if (playerSelection == 'scissors') {
            switch(computerSelection) {
                case 'rock':
                    results = '(You: scissors -- CPU: rock) LOSS';
                    computerScore++;
                    break;
                case 'paper':
                    results = '(You: scissors -- CPU: paper) WIN';
                    playerScore++;
                    break;
                case 'scissors':
                    results = '(You: scissors -- CPU: scissors) TIE';
                    break;
            }
            return results;
        }
        else { 
            return "Please select rock, paper, or scissors ya goof.";
        }
}