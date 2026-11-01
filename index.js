const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", playGame);
const playerScoreRef = document.querySelector(".score-player");
const computerrScoreRef = document.querySelector(".score-computer");
const winnerParaRef = document.querySelector(".winner");
const containerRef = document.querySelector(".container");
containerRef.addEventListener("click", function (e) {
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
});
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
  updateScore();
  winner = haveWinner();
  if (winner) {
    winnerParaRef.textContent = `Congrats! ${winner} wins the game!`;
    playerScore = 0;
    computerScore = 0;
  } else {
    winnerParaRef.textContent = "";
  }
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
