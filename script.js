const gameChoices = ["rock", "paper", "scissors"];

const getComputerChoice = function (choices) {
    let rng = Math.floor(Math.random() * 3);
    let randomChoice = choices[rng];
    return randomChoice;
}

const getPlayerChoice = function (choices) {
    let rng = Math.floor(Math.random() * 3);
    let randomChoice = choices[rng];
    return randomChoice;
}

const computerChoice = getComputerChoice(gameChoices);
const playerChoice = getPlayerChoice(gameChoices);

const playRound = function (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("tie")
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock")
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper")
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors")
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper")
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors")
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock")
    } else {
        console.log("Invalid Choice. Please pick Rock, Paper or Scissors.")
    }
}

playRound(playerChoice, computerChoice);