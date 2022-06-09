const content = ["rock" , "papper", "scissors"]
let random = Math.floor(Math.random() * content.length)
function computerPlay() {
    return content[random]
}
computerPlay()
const playerSelection = "papper"
const computerSelection = computerPlay
function playRound (playerSelection,computerSelection) {
    if(computerSelection === "rock") {
        return "You win! Papper beats rock"
    } else if (computerSelection === "scissors") {
        return "You lose! Scissors cut papper"
    } else if (computerSelection === "papper"){
        return "It's a draw"
    }

}
console.log(playRound(playerSelection,computerSelection))