let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");
const humanScoreSpan = document.querySelector("#humanScore");
const computerScoreSpan = document.querySelector("#computerScore");

function getComputerChoice(){
    randomNum = Math.random();
    let computerChoice;
    if(randomNum < 0.33){
        computerChoice = rock;
    }else if(randomNum > 0.66){
        computerChoice = paper;
    }else{
        computerChoice = scissors;
    }
    return computerChoice;
}
function playRound(humanChoice, computerChoice){
    if(computerScore == 5 || humanScore == 5){
        computerScore = 0;
        humanScore = 0;
        resultDiv.setAttribute("style", "background-color:black;");
    }
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        resultDiv.textContent = `You won! Rock beats Scissors`;
    }else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        resultDiv.textContent = `You lose! Rock beats Scissors`;
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        resultDiv.textContent = `You won! Paper beats Rock`;
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        resultDiv.textContent = `You lose! Paper beats Rock`;
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        resultDiv.textContent = `You won! Scissors beats Paper`;
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        resultDiv.textContent = `You lose! Scissors beats Paper`;
    }else if(humanChoice === computerChoice){
        resultDiv.textContent = `It's a tie!`;
    }else {
        resultDiv.textContent = " Invalid choice";
    }
    if(computerScore == 5){
        resultDiv.setAttribute("style", "background-color:red;");
        resultDiv.textContent = " COMPUTER WON THIS GAME";
    }else if(humanScore == 5){
        resultDiv.setAttribute("style", "background-color:green;");
        resultDiv.textContent = " 5 POINTS! YOU ARE THE WINNER";
    }
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}

rockBtn.addEventListener("click", () => {playRound("rock", getComputerChoice())});
paperBtn.addEventListener("click", () => {playRound("paper", getComputerChoice())});
scissorsBtn.addEventListener("click", () => {playRound("scissors", getComputerChoice())});