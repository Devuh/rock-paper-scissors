function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3)
    switch(randNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Error";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        return "It's a tie!";
    }else if(playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    }else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    }else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    }else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    }else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    }else if(playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    }else{
        return "Invalid";
    }
}

/*

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let result = "";

    for(let i = 0; playerScore < 5 && computerScore < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if(result.charAt(4) == "w") {
            playerScore++;
        }else if(result.charAt(4) == "l") {
            computerScore++;
        }else{
            continue;
        }
    }

    return "Final Score: Player - " + playerScore + " Computer - " + computerScore;
}

*/

let playerScore = 0;
let computerScore = 0;

let results = document.querySelector("#results");
let selection = document.querySelector("#selection");

selection.addEventListener("click", (event) => {
    let target = event.target;
    let result = playRound(target.id, getComputerChoice());
    
    if(result.charAt(4) == "w") {
        playerScore++;
    }else if(result.charAt(4) == "l") {
        computerScore++;
    }

    if(playerScore === 5) {
        results.textContent = "You win! Final score is " + playerScore + ":" + computerScore;
        playerScore = 0;
        computerScore = 0;
    } else if(computerScore === 5) {
        results.textContent = "You lose! Final score is " + playerScore + ":" + computerScore;
        playerScore = 0;
        computerScore = 0;
    } else {
        results.textContent = result + " " + playerScore + ":" + computerScore;
    }
});



