//Remove the logic that plays five founds
//Create three buttons, one for each selection of choice for the human
//The buttons should call the playround function each time the button is clicked with correct playerselection
//Add a div to display the results of each round;change all console.logs to DOM methods
//Display the running score and annouces the winner once either player reaches 5 points

let playerScore = 0;
let computerScore = 0;
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const results = document.createElement("div");
const display = document.createElement("div");
const score = document.createElement("p");


rock.textContent = "Rock"
paper.textContent = "Paper"
scissors.textContent = "Scissors"
const body = document.body;
body.style.width = "100vw"
body.style.height = "100vh"
body.appendChild(display)
body.insertBefore(results,display);
body.appendChild(score)
results.textContent = "Current round:"
score.textContent = `human: 0 computer: 0`
const choices = [rock,paper,scissors];

//Return a random string as the computer choice: rock, paper or scissors
function getComputerChoice() {
        const random = Math.floor(Math.random() * 100)
        if(random <= 30) return "Rock".toLowerCase()
        else if(random <= 60) return "Paper".toLowerCase()
        else return "Scissors".toLowerCase()

}

//Play a single and judge who by matching the computer and human choice
function playRound(humanChoice,computerChoice) {
    if(playerScore == 5) {
        console.log("you won!!")
        return;
    }
    if(computerChoice == 5) {
        console.log("You lost!!")
        return;
    }
    console.log(humanChoice,computerChoice)
    if(humanChoice === computerChoice) {
        console.log("Draw")
        results.textContent = "Draw"
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose this round,paper beats rock")
        computerScore++
        results.textContent = "You lost this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win this round,paper beats rock")
        playerScore++
        results.textContent = "You won this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    }
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose this round,rock beats scissors")
        computerChoice++
        results.textContent = "You lost this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win this round,rock beats scissors")
        playerScore++
        results.textContent = "You won this round"

    } 
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose this round,scissors beats paper")
        computerScore++
        results.textContent = "You lost this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    } 
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win this round,scissors beats paper")
        playerScore++
        results.textContent = "You won this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    }
}
//Play a five round game where the winner is calculated at the end
function playGame() {
   // computerScore = 0;
    //playerScore = 0;
 
    
       const  humanChoice = getHumanChoice()
       const computerChoice = getComputerChoice()
        playRound(humanChoice,computerChoice);
        
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



function handleChoice(e) {
    playRound(e.target.textContent.toLowerCase(),getComputerChoice())
}
choices.forEach(choice => {
    choice.addEventListener("click",handleChoice)
})

choices.forEach(choice => {display.appendChild(choice)})


//playGame()
