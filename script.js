let rock = "rock";
let paper = "paper";
let scissors = "scissors";
function getComputerChoice(){
    randomNum = Math.random();
    let computerChoice;
    if(randomNum < 0.3){
        computerChoice = rock;
    }else if(randomNum > 0.7){
        computerChoice = paper;
    }else{
        computerChoice = scissors;
    }
    return computerChoice;
}

function getHumanChoice(){
    let input = prompt("What is your choice? (rock, paper, scissors", "");
    let humanChoice = input.toLowerCase();
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You won! Rock beats Scissors")
            humanScore++;
        }else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors")
            computerScore++;
        }else if(humanChoice == "paper" && computerChoice == "rock"){
            console.log("You won! Paper beats Rock")
            humanScore++;
        }else if(humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats Rock")
            computerScore++;
        }else if(humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You won! Scissors beats Paper")
            humanScore++;
        }else if(humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissirs beats Paper")
            computerScore++;
        }else if(humanChoice === computerChoice){
            console.log("We both picked the same thing")
        }else {
            console.log("Invalid choice")
        }
    }

    for (let rounds = 1; rounds <= 5; rounds++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Round:" + rounds + " Your score is " + humanScore + " computer score is " + computerScore)
        if(rounds == 5){
            (humanScore > computerScore) ? console.log("YOU ARE THE WINNER"): computerScore === humanScore? console.log("EQUAL, GOOD GAME!"): console.log("YOU LOST :(");
        }
    }
}

playGame();