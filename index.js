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
    winnerParaRef.textContent = `Congrats! ${winner} wins the game!`;
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

function playGame() {
  const choices = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;

  const getComputerChoice = function () {
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
  };

  getComputerChoice();

  const getHumanChoice = function () {
    const choice = prompt("Choose rock, paper or scissors!");
    return choice;
  };

  const playRound = function (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
      console.log(`Draw (Computer: ${computerChoice}: Player: ${humanChoice})`);
    }

    if (computerChoice === "rock" && humanChoice === "scissors") {
      console.log("Computer wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`);
      computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
      console.log("Human wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`);
      playerScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      playerScore++;
      console.log("Human wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`);
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      computerScore++;
      console.log("Computer wins that Round" + `Computer: ${computerChoice} X Player: ${humanChoice}`);
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      playerScore++;
      console.log("Human wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`);
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      computerScore++;
      console.log("Computer wins that round! " + `Computer: ${computerChoice} X Player: ${humanChoice}`);
    }
    const winner = haveWinner();
    if (winner) {
      console.log(`
      ${winner} wins!
      Computer: ${computerScore} 
      Player: ${playerScore}`);
      return;
    } else {
      console.log(`
     Computer: ${computerScore} 
     Player: ${playerScore}`);
      playRound(getComputerChoice(), getHumanChoice());
    }
  };

  function haveWinner() {
    if (computerScore === 3) return "Computer";
    if (playerScore === 3) return "Human";
  }
  playRound(getComputerChoice(), getHumanChoice());
}
