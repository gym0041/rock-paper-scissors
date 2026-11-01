const playerScoreRef = document.querySelector(".score-player");
const computerrScoreRef = document.querySelector(".score-computer");
const winnerParaRef = document.querySelector(".winner");
const currentResultParaRef = document.querySelector(".currentResult");
const containerRef = document.querySelector(".container");
containerRef.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  switch (e.target.id) {
    case "btn-rock":
      playRound(getComputerChoice(), "rock");
      break;
    case "btn-paper":
      playRound(getComputerChoice(), "paper");
      break;
    case "btn-scissors":
      playRound(getComputerChoice(), "scissors");
      break;
  }
}
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let winner;
const getComputerChoice = function () {
  const choice = choices[Math.floor(Math.random() * 3)];
  return choice;
};

function playRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    let msg = `Draw (Computer: ${computerChoice}: Player: ${humanChoice})`;
    updateWinner(msg);
  }

  if (computerChoice === "rock" && humanChoice === "scissors") {
    let msg = "Computer wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`;
    computerScore++;
    updateWinner(msg);
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    let msg = "Human wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`;
    playerScore++;
    updateWinner(msg);
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    playerScore++;
    let msg = "Human wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`;
    updateWinner(msg);
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    let msg = "Computer wins that Round" + `Computer: ${computerChoice} X Player: ${humanChoice}`;
    updateWinner(msg);
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    playerScore++;
    let msg = "Human wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`;
    updateWinner(msg);
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    let msg = "Computer wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`;
    updateWinner(msg);
  }
  updateScore();
  winner = haveWinner();
  if (winner) {
    console.log(winner);
    winnerParaRef.textContent = `${winner === "Human" ? "Congrats!" : ""} ${winner} wins the game!`;
    updateWinner("");
    playerScore = 0;
    computerScore = 0;
  } else {
    winnerParaRef.textContent = "";
  }
}
function updateWinner(message) {
  currentResultParaRef.textContent = message;
}
function updateScore() {
  playerScoreRef.textContent = playerScore;
  computerrScoreRef.textContent = computerScore;
}
function haveWinner() {
  if (computerScore === 3) return "Computer";
  if (playerScore === 3) return "Human";
}
