
let playerScore = 0;
let computerScore = 0;

// Figuring out the computer choice //
// Getting a random number between 1 and 3 //



function getComputerChoice() {
    let math = Math.floor(Math.random() * 3) + 1;
    let computerChoice1;
    if ( math === 1) {
        computerChoice1 = "paper";
    } else if (math === 2) {
        computerChoice1 = "rock";
    } else if (math === 3) {
        computerChoice1 = "scissors";
    }
    return computerChoice1;
}

// Figuring out the humanChoice choice //

function getHumanChoice() {
    let humanChoice1 = prompt("Whats up");
    return humanChoice1;
}

// playing the round //

function playRound(humanChoice1, computerChoice1) {
    humanChoice1 = humanChoice1.toLowerCase();
    if (humanChoice1 === "paper" && computerChoice1 === "paper"){
        console.log("It's a tie")
        playerScore++
        computerScore++
    } else if (humanChoice1 === "paper" && computerChoice1 === "rock") {
        console.log("You win");
        playerScore++
    } else if (humanChoice1 === "paper" && computerChoice1 === "scissors") {
        console.log("You lost");
        computerScore++
    } else if (humanChoice1 === "rock" && computerChoice1 === "paper") {
        console.log("You lose");
        computerScore++
    } else if (humanChoice1 === "rock" && computerChoice1 === "scissors") {
        console.log("You win");
        playerScore++
    } else if (humanChoice1 === "scissors" && computerChoice1 === "paper") {
        console.log("You win");
        playerScore++
    } else if (humanChoice1 === "scissors" && computerChoice1 === "rock") {
        console.log("You lose");
        computerScore++
    }
        
} 


// The score of the match //


// adding the score //



// Playing the game //

function playJanken () {
    for (let i = 0; i < 5; i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice();
        playRound(human, computer);
    }
    
    console.log("It's over")
    console.log("Player Score:", playerScore)
    console.log("Computer Score", computerScore)
}

playJanken();