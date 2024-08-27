// Players score
let player = 0;
let computer1 = 0;

// Button event, calling the functions
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  text("no");
  playGame("paper");
});

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  text("no");
  playGame("rock");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  text("no");
  playGame("scissors");
});

// Updating the players score
const container = document.querySelector("#container1");

const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");

playerScore.textContent = `Player: ${player}`;
computerScore.textContent = `Computer: ${computer1}`;

// Updating win and lose text
function text(word) {
  if (word === "no") {
    container.textContent = "";
  } else if (word === "tie") {
    container.textContent = "It's a tie";
  } else if (word === "win") {
    container.textContent = "Player Wins";
  } else if (word === "lose") {
    container.textContent = "Computer Wins";
  }
}

// Getting a random computer choice
function getComputerChoice() {
  const getNumber = Math.floor(Math.random() * 3) + 1;
  if (getNumber === 1) {
    return "paper";
  } else if (getNumber === 2) {
    return "rock";
  } else if (getNumber === 3) {
    return "scissors";
  }
}

// Game starts and gets the result
function playGame(btn) {
  const computer = getComputerChoice();
  if (btn === "paper" && computer === "rock") {
    text("win");
    player++;
    playerScore.textContent = `Player: ${player}`;
    endGame();
  } else if (btn === "paper" && computer === "scissors") {
    text("lose");
    computer1++;
    computerScore.textContent = `Computer: ${computer1}`;
    endGame();
  } else if (btn === "rock" && computer === "paper") {
    text("lose");
    computer1++;
    computerScore.textContent = `Computer: ${computer1}`;
    endGame();
  } else if (btn === "rock" && computer === "scissors") {
    text("win");
    player++;
    playerScore.textContent = `Player: ${player}`;
    endGame();
  } else if (btn === "scissors" && computer === "rock") {
    text("lose");
    computer1++;
    computerScore.textContent = `Computer: ${computer1}`;
    endGame();
  } else if (btn === "scissors" && computer === "paper") {
    text("win");
    player++;
    playerScore.textContent = `Player: ${player}`;
    endGame();
  } else {
    text("tie");
  }
}

// Game ends when someone gets to 5 points
function endGame() {
  if (player === 5) {
    alert("You Won the Game");
    player = 0;
    computer1 = 0;
    playerScore.textContent = `Player: 0`;
    computerScore.textContent = `Computer: 0`;
  } else if (computer1 === 5) {
    alert("You Lost the Game");
    player = 0;
    computer1 = 0;
    playerScore.textContent = "Player: 0";
    computerScore.textContent = "Computer: 0";
  }
}
