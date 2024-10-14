let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = String(Math.floor(Math.random() * 3));
  let result = "";
  switch (choice) {
    case "0":
      result = "rock";
      break;
    case "1":
      result = "paper";
      break;
    case "2":
      result = "scissors";
      break;
  }
  return result;
}

function getHumanChoice() {
  let input = prompt(
    "Enter you choice(rock paper scissors): ",
    getComputerChoice()
  );
  input = input.toLowerCase();
  input = input.trim();
  switch (input) {
    case "rock":
      break;
    case "paper":
      break;
    case "scissors":
      break;
    default:
      console.error("Invalid input!");
  }
  return input;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("tie!");
  } else {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("Human Win!");
      humanScore++;
    } else {
      console.log("Computer Win!");
      computerScore++;
    }
  }

  console.log(
    `Now human score is ${humanScore} VS computer score ${computerScore}`
  );
  return;
}

for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  console.log(`You choose ${humanSelection}`);
  console.log(`Computer choose ${computerSelection}`);
  playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
  alert("Finally human win!");
} else if (humanScore < computerScore) {
  alert("Finally computer win!");
} else {
  alert("Tie!");
}
