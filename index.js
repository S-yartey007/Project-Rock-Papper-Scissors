const content = ["rock" , "papper", "scissors"]
let random = Math.floor(Math.random() * content.length)
function computerPlay() {
    return content[random]
}

const start = document.querySelector('.start');
const end = document.querySelector('.result'); 
end.style.color = 'brown';
end.style.fontSize = '30px';
end.style.fontWeight ='bolder'
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

var computerScore = 0;
var playerScore = 0;
start.addEventListener('click',() => {
    playRound();
    computerScore = 0;
    playerScore = 0;
    end.textContent = '';
})
var computerSelection = computerPlay();
function playRound() {
    btn1.addEventListener('click',() => {
        compareResult('rock', computerSelection);
    })
    btn2.addEventListener('click', () => {
        compareResult('papper', computerSelection)
    })
    btn3.addEventListener('click', () => {
        compareResult('scissors', computerSelection)
    })
    
}


function compareResult(string, computerSelection) {
    finalResult();
    if(string === computerSelection) {
        playerScore += 0;
    } else if(string === 'rock' && computerSelection === 'papper') {
        computerScore += 1;
    } else if(string === 'papper' && computerSelection === 'rock') {
        playerScore += 1;
    } else if(string === 'scissors' && computerSelection === 'papper') {
        playerScore += 1;
    } else if(string === 'papper' && computerSelection === 'scissors') {
        computerScore += 1;
    } else if(string === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
    } else if(string === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
    }
}

function finalResult() {
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            end.textContent = 'YOU HAVE WON';

        } else {
            end.textContent = 'YOU HAVE LOST';
        }
    }
}







