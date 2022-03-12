function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  console.log(options);
  const randomElement = options[Math.floor(Math.random() * options.length)];
  console.log(options);
  console.log(randomElement);
  return randomElement;
}

// function playRound(playerSelection, computerSelection) {
//     if playerSelection == computerSelection return
// }

// const computerSelection = computerPlay();
// const playerSelection = "rock";
