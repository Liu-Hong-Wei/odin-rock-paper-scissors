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

function resetGameState() {
  humanScore = 0;
  computerScore = 0;
  updateGameScore();
  const gameLog = document.querySelectorAll("#game-progress li");
  gameLog.forEach((node) => {
    node.remove();
  });
}

function updateGameScore() {
  const humanPoints = document.querySelector(
    "#points-container > .human-score"
  );
  humanPoints.textContent = `HUMAN SCORE: ${humanScore}`;
  const computerPoints = document.querySelector(
    "#points-container > .computer-score"
  );
  computerPoints.textContent = `COMPUTER SCORE: ${computerScore}`;
}

function addGameLog(text) {
  const res = document.createElement("li");
  res.textContent = text;
  result.appendChild(res);
}

let humanScore = 0;
let computerScore = 0;
const result = document.querySelector("#game-progress");

function playRound(humanChoice, computerChoice) {
  addGameLog(`You chose ${humanChoice} While Computer chose ${computerChoice}`);

  if (humanChoice == computerChoice) {
    addGameLog("Tie!");
  } else {
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      addGameLog("Human Win This Round!");
      humanScore++;
    } else {
      addGameLog("Computer Win This Round!");
      computerScore++;
    }
  }
  updateGameScore();
  if (humanScore >= 3) {
    alert("You Win!");
    resetGameState();
  } else if (computerScore >= 3) {
    alert("Computer Win!");
    resetGameState();
  }
  return;
}

function getHumanClickedButton(e) {
  let humanChoice = "invalid";
  switch (e.target.className) {
    case "rock":
      humanChoice = "rock";
      break;
    case "paper":
      humanChoice = "paper";
      break;
    case "scissors":
      humanChoice = "scissors";
      break;
    case "reset":
      resetGameState();
      return;
    default:
      return;
  }
  if (humanChoice !== "invalid") {
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

updateGameScore();
const choice = document.querySelector("#choice-section");
choice.addEventListener("click", getHumanClickedButton);
