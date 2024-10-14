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
  let result = 0;
  if (humanChoice == computerChoice) {
    result = 0;
  } else {
    switch (humanChoice) {
      case "rock":
        switch (computerChoice) {
          case "scissors":
            result = 1;
            break;
          case "paper":
            result = 2;
            break;
        }
        break;
      case "paper":
        switch (computerChoice) {
          case "scissors":
            result = 2;
            break;
          case "rock":
            result = 1;
            break;
        }
        break;
      case "scissors":
        switch (computerChoice) {
          case "rock":
            result = 2;
            break;
          case "paper":
            result = 1;
            break;
        }
        break;
    }
  }
  if (result == 0) {
    console.log("tie!");
    console.log(`Now human score is still ${humanScore} VS computer score ${computerScore}`);
  } else if (result == 1) {
    console.log("Human Win!");
    humanScore++;
    console.log(`Now human score is ${humanScore} VS computer score ${computerScore}`);
  } else if (result == 2) {
    console.log("Computer Win!");
    computerScore++;
    console.log(`Now human score is ${humanScore} VS computer score ${computerScore}`);
  } else {
    console.error("Something Went Wrong!");
  }
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