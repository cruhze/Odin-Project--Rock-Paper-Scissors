const gameChoices = ["rock", "paper", "scissors"];

const btns = document.querySelectorAll('button')
let clickBtn = '';
let playerChoice=''
let playerScore = 0;
let computerScore = 0;

const getComputerChoice = function (choices) {
    let rng = Math.floor(Math.random() * 3);
    let randomChoice = choices[rng];
    return randomChoice;
}


const computerChoice = getComputerChoice(gameChoices);


const playRound = function (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("tie")
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock")
        computerScore++
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper")
        playerScore++
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors")
        playerScore++
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper")
        computerScore++
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors")
        computerScore++
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock")
        playerScore++
    } else {
        console.log("Invalid Choice. Please pick Rock, Paper or Scissors.")
    }
}


btns.forEach(button => {
    button.addEventListener('click', function(event){
        const playerChoice = event.target.textContent.toLowerCase();
        const computerChoice = getComputerChoice(gameChoices);
        
        playRound(playerChoice, computerChoice)
        console.log(playerScore, computerScore)
        if (playerScore===5){
            console.log("You Won the Game!")
            resetGame()
        }else if(computerScore===5){
            console.log("You lost the Game!")
            resetGame()
        }
    })
  
})

function resetGame() {
    playerScore = 0;
    computerScore = 0;
}