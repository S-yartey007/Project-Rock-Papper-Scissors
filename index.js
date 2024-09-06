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
const newGame = document.createElement('button')
const results = document.createElement("div");
const display = document.createElement("div");
const score = document.createElement("p");
const body = document.body;
const choices = [rock,paper,scissors];



rock.textContent = "Rock"
paper.textContent = "Paper"
scissors.textContent = "Scissors"
newGame.textContent = "Start a new Game"
results.textContent = "Current round:"
score.textContent = `human: 0 computer: 0`

body.style.width = "100vw"
body.style.height = "100vh"

body.appendChild(display)
body.insertBefore(results,display);
body.appendChild(score)
body.appendChild(newGame)
choices.forEach(choice => {display.appendChild(choice)})


//Return a random string as the computer choice: rock, paper or scissors
function getComputerChoice() {
        const random = Math.floor(Math.random() * 100)
        if(random <= 30) return "Rock".toLowerCase()
        else if(random <= 60) return "Paper".toLowerCase()
        else return "Scissors".toLowerCase()

}

//Play a single and judge who by matching the computer and human choice
function playRound(humanChoice,computerChoice) {
    score.textContent = `human:${playerScore} computer${computerScore}`
    if(humanChoice === computerChoice) {
        console.log("Draw")
        results.textContent = "Draw"
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        results.textContent = "You lost this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        playerScore++
        results.textContent = "You won this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    }
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        results.textContent = "You lost this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        playerScore++
        results.textContent = "You won this round"
        score.textContent = `human:${playerScore} computer${computerScore}`


    } 
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        results.textContent = "You lost this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    } 
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        playerScore++
        results.textContent = "You won this round"
        score.textContent = `human:${playerScore} computer${computerScore}`

    }
}
//Play a five round game where the winner is calculated at the end
function playGame() {
   let computerScore = 0;
   let playerScore = 0;
        

}



function handleChoice(e) {
    if(playerScore >= 5) {
        score.textContent = "You won"
        return;
    }
    else if (computerScore >= 5) {
        score.textContent = "You lost"
        return;
    }
    playRound(e.target.textContent.toLowerCase(),getComputerChoice())
    if(playerScore >= 5) {
        score.textContent = "You won"
        return;
    }
    else if (computerScore >= 5) {
        score.textContent = "You lost"
        return;
    }

  
}


choices.forEach(choice => {
    choice.addEventListener("click",handleChoice)
})

newGame.addEventListener("click",() => {
    playerScore = 0;
    computerScore = 0;
    score.textContent = `New Game initialised`
   
});


