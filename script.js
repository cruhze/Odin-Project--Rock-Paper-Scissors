const gameChoices = ["rock","paper","scissors"];

const getComputerChoice = function(choice){
let rng = Math.floor(Math.random() * 3);
let randomChoice = choice[rng];
return randomChoice
}
const getPlayerChoice = function(choice){
let rng = Math.floor(Math.random() * 3);
let randomChoice = choice[rng];
return randomChoice;
}

getComputerChoice(gameChoices);
getPlayerChoice(gameChoices);