playerScore = 0
computerScore = 0

// Function for computer selection
function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  const randomElement = options[Math.floor(Math.random() * options.length)];
  return randomElement;
}

// Function to filter player input and scan for valid input
function playerPlay(selection) {
  selection = selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
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

// Logic to play round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    scoreDisplay.textContent = (`You win ${playerSelection} beats ${computerSelection}`);
    playerScore = playerScore + 1
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    scoreDisplay.textContent = (`You lose ${computerSelection} beats ${playerSelection}`);
    computerScore = computerScore + 1
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    scoreDisplay.textContent = (`You win ${playerSelection} beats ${computerSelection}`);
    playerScore = playerScore + 1
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    scoreDisplay.textContent = (`You lose ${computerSelection} beats ${playerSelection}`);
    computerScore = computerScore + 1
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    scoreDisplay.textContent = (`You win ${playerSelection} beats ${computerSelection}`);
    playerScore = playerScore + 1
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    scoreDisplay.textContent = (`You lose ${computerSelection} beats ${playerSelection}`);
    computerScore = computerScore + 1
  } else {
    scoreDisplay.textContent = (`Its a tie, ${playerSelection} ties with ${computerSelection}`);
  }
}

const rockBtn = document.querySelector("#rock")
rockBtn.addEventListener('click', () => {
  playerSelection = "Rock"
  playRound(playerSelection, computerPlay())
  playerDisplay.textContent = (`Player score: ${playerScore}`);
  computerDisplay.textContent = (`Computer score: ${computerScore}`);
  if (playerScore === 5){
    scoreDisplay.textContent = (`Game over, you win.`)
    rockBtn.remove()
    paperBtn.remove()
    scissorsBtn.remove()
  }
  else if (computerScore === 5){
    scoreDisplay.textContent = (`Game over, computer wins`)
    rockBtn.remove()
    paperBtn.remove()
    scissorsBtn.remove()
  }
});

const paperBtn = document.querySelector("#paper")
paperBtn.addEventListener('click', () => {
  playerSelection = "Paper"
  playRound(playerSelection, computerPlay())
  playerDisplay.textContent = (`Player score: ${playerScore}`);
  computerDisplay.textContent = (`Computer score: ${computerScore}`);
  if (playerScore === 5){
    scoreDisplay.textContent = (`Game over, you win.`)
    rockBtn.remove()
    paperBtn.remove()
    scissorsBtn.remove()
  }
  else if (computerScore === 5){
    scoreDisplay.textContent = (`Game over, computer wins`)
    rockBtn.remove()
    paperBtn.remove()
    scissorsBtn.remove()
  }
});

const scissorsBtn = document.querySelector("#scissors")
scissorsBtn.addEventListener('click', () => {
  playerSelection = "Scissors"
  playRound(playerSelection, computerPlay())
  playerDisplay.textContent = (`Player score: ${playerScore}`);
  computerDisplay.textContent = (`Computer score: ${computerScore}`);
  if (playerScore === 5){
    scoreDisplay.textContent = (`Game over, you win.`)
    rockBtn.remove()
    paperBtn.remove()
    scissorsBtn.remove()
  }
  else if (computerScore === 5){
    scoreDisplay.textContent = (`Game over, computer wins`)
    rockBtn.remove()
    paperBtn.remove()
    scissorsBtn.remove()
  }
});

const scoreDisplay = document.querySelector("#score")
const playerDisplay = document.querySelector("#playerscore")
const computerDisplay = document.querySelector("#computerscore")