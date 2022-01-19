
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
                return "You win! Rock beats " + computerSelection;
                break;
            } else if (playerSelection.toUpperCase() === "PAPER"){
                return "You lose! " + computerSelection + " beats Paper";
                break;
            } else if (playerSelection.toUpperCase() === "SCISSORS"){
                return "It\'s a tie";
                break;
            }
       
        case "Paper":
            if (playerSelection.toUpperCase() === "SCISSORS"){
                return "You win! Scissors beats " + computerSelection;
                break;
            } else if (playerSelection.toUpperCase() === "ROCK"){
                return "You lose! " + computerSelection + " beats Rock";
                break;
            } else if (playerSelection.toUpperCase() === "PAPER"){
                return "It\'s a tie"
                break;
            }
        
        case "Rock":
            if (playerSelection.toUpperCase() === "PAPER"){
                return "You win! Paper beats " + computerSelection;
                break;
            } else if (playerSelection.toUpperCase() === "SCISSORS"){
                return "You lose! " + computerSelection + " beats Scissors";
                break;
            } else if (playerSelection.toUpperCase() === "ROCK"){
                return "It\'s a tie"
                break;
            }
        default :
            //
    }
   
}

function game(){
    const playerSelection = window.prompt("Make a choice between: Rock, Paper and Scissors", "Rock");
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++){
        let message = playRound(playerSelection,computerPlay());
        console.log(i,  message)
        if (message.includes("win!")){
            playerWins += 1;
        } else if (message.includes("lose!")){
            computerWins += 1;
        } else {
            playerWins += 0;
            computerWins += 0;
        }
    }
   
    if (playerWins > computerWins){
        return "You win by " + playerWins + ": " + computerWins;
    } else if (playerWins < computerWins){
        return "You lose by " + computerWins + ": " + playerWins;
    } else {
        return "It\'s a tie, " + playerWins + ": " + computerWins;;
    }

}

console.log (game())