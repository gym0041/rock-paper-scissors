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

const playBtn = document.querySelector(".play-btn");
playBtn.addEventListener("click", playGame);
