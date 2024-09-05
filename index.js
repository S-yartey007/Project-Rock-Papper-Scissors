
//Return a random string as the computer choice: rock, paper or scissors
function getComputerChoice() {
        const random = Math.floor(Math.random() * 100)
        if(random <= 30) return "Rock".toLowerCase()
        else if(random <= 60) return "Paper".toLowerCase()
        else return "Scissors".toLowerCase()

}
//Return a  string human generated string

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice").toString().toLowerCase()

    if(!(humanChoice === "paper" || humanChoice === "rock" || humanChoice === "scissors")) {
        humanChoice = prompt("Enter valid choice").toString().toLowerCase();
        console.log(humanChoice)
    }
    return humanChoice
}
//Play a single and judge who by matching the computer and human choice
function playRound(humanChoice,computerChoice) {
    console.log(humanChoice,computerChoice)
    if(humanChoice === computerChoice) {
        console.log("Draw")
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose this round,paper beats rock")
        computerScore++
        console.log(computerScore)
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win this round,paper beats rock")
        playerScore++
        console.log(playerScore)

    }
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose this round,rock beats scissors")
        computerChoice++
        console.log(computerScore)

    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win this round,rock beats scissors")
        playerScore++
        console.log(playerScore)

    } 
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose this round,scissors beats paper")
        computerScore++
        console.log(computerScore)

    } 
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win this round,scissors beats paper")
        playerScore++
        console.log(playerScoreScore)

    }
}
//Play a five round game where the winner is calculated at the end
function playGame() {
    computerScore = 0;
    playerScore = 0 
 
    for(let i = 0; i < 5; i++) {
       const  humanChoice = getHumanChoice()
       const computerChoice = getComputerChoice()
        playRound(humanChoice,computerChoice);
        
    }
    if(computerScore === playerScore) {
        console.log("The game was a draw")
    }
    else if( computerScore > playerScore) {
        console.log("You lost the game")
    }
    else {
        console.log("you won!!,Congratulations")
    }
}


playGame()
