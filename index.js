const content = ["rock" , "papper", "scissors"]
let random = Math.floor(Math.random() * content.length)
function computerPlay() {
    return content[random]
}
let playerSelection;
let inputUser;
function input () {
     inputUser = prompt("Enter your choice:");
      playerSelection = inputUser.toLowerCase()
}

const computerSelection = computerPlay()
function playRound (playerSelection,computerSelection) {
    computerPlay()
    input()
    if(computerSelection === playerSelection) {
        return "Draw"
    } else if (computerSelection === "scissors" && playerSelection === "papper") {
        return "You lose!"
    } else if (computerSelection === "papper" && playerSelection === "scissors"){
        return "You win!"
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! "
    } else if(computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! "
    } else if(computerSelection === "papper" && playerSelection === "rock") {
        return "You win!"
    }else if (computerSelection === "rock" && playerSelection === "papper") {
        return "You lose"
    } else {
        return "Draw"
    }
}

let currentRound = playRound(playerSelection,computerSelection)
let playerScore = 0;
let computerScore = 0;
function game() {
    for(let i = 0; i < 2; i++) {
        playRound(playerSelection,computerSelection)
        if(currentRound === "You win!") {
            playerScore ++;
        } else if(currentRound === "You lose!") {
            computerScore ++;
        } else {
            playerScore += 0;
            computerScore += 0;
        }
        console.log("Playerscore: " + playerScore)
    }
    if(computerScore < playerScore) {
        console.log(currentRound)
    } else if( computerScore > playerScore ) {
        console.log(currentRound)
    } else {
        console.log(currentRound)
    }
}

game()
