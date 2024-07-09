let computerScore = 0;
let humanScore = 0;

//

const options = ["rock", "paper", "scissors"];

//

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return options[0];
  } else if (number === 1) {
    return options[1];
  } else {
    return options[2];
  }
}

function getHumanChoice() {
  let choice = prompt("Enter: rock, paper or scissors");
  return choice.toLowerCase();
}

//

let computerSelection = getComputerChoice;
let humanSelection = getHumanChoice;

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  //
  if (humanChoice === computerChoice) {
    console.log(`Draw: ${humanChoice} is the same as ${computerChoice}`);
    return;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`Computer wins: ${computerChoice} beats ${humanChoice}`);
    return ++computerScore;
  } else {
    console.log(`You win: ${humanChoice} beats ${computerChoice}`);
    return ++humanScore;
  }
}

function playGame() {
  playRound(humanSelection(), computerSelection());
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore) {
  console.log(`YOU WIN! ${humanScore} : ${computerScore}`);
} else if (humanScore < computerScore) {
  console.log(`YOU LOSE! ${humanScore} : ${computerScore}`);
} else {
  console.log(`DRAW ${humanScore} : ${computerScore}`);
}
