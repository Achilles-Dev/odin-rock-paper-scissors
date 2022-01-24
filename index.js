const results = document.querySelector('.results');  
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
let playerWins = 0;
let computerWins = 0;


function computerPlay(){
    const answers = ["Rock", "Paper", "Scissors"];
    const ansIndex = getRandom(answers.length);
    return answers[ansIndex];
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}



function playRound(playerSelection, computerSelection){
    
    switch (computerSelection){
        case "Scissors":
            if (playerSelection.toUpperCase() === "ROCK"){
                results.textContent = "You win! Rock beats " + computerSelection;
                break;
            } else if (playerSelection.toUpperCase() === "PAPER"){
                results.textContent = "You lose! " + computerSelection + " beats Paper";
                break;
            } else if (playerSelection.toUpperCase() === "SCISSORS"){
                results.textContent = "It\'s a tie";
                break;
            }
       
        case "Paper":
            if (playerSelection.toUpperCase() === "SCISSORS"){
                results.textContent = "You win! Scissors beats " + computerSelection;
                break;
            } else if (playerSelection.toUpperCase() === "ROCK"){
                results.textContent = "You lose! " + computerSelection + " beats Rock";
                break;
            } else if (playerSelection.toUpperCase() === "PAPER"){
                results.textContent = "It\'s a tie"
                break;
            }
        
        case "Rock":
            if (playerSelection.toUpperCase() === "PAPER"){
                results.textContent = "You win! Paper beats " + computerSelection;
                break;
            } else if (playerSelection.toUpperCase() === "SCISSORS"){
                results.textContent = "You lose! " + computerSelection + " beats Scissors";
                break;
            } else if (playerSelection.toUpperCase() === "ROCK"){
                results.textContent = "It\'s a tie"
                break;
            }
        default :
            //
    }
}


const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => 
    game(button.textContent)
));

function game(playerSelection){
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    let message = results.textContent;
        if (message.includes("win!")){
            playerWins += 1;
        } else if (message.includes("lose!")){
            computerWins += 1;
        } else {
            playerWins += 0;
            computerWins += 0;
        }

    player.textContent = playerWins;
    computer.textContent = computerWins;
    if (playerWins >= 5 && computerWins <= 5){
        results.textContent =  'Congrats! You won the game.'
        buttons.forEach(button => button.disabled = true)
    } else if (computerWins >= 5 && playerWins <= 5){
        results.textContent =  'Sorry! You lost to computer'
        buttons.forEach(button => button.disabled = true)
    } else {
        return;
    }
}






