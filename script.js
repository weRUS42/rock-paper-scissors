let playerItem;
let compscore = document.getElementById("computerscore");
let plscore = document.getElementById("playerscore");
let message = document.getElementById("message");
let wins = 0;
let losts = 0;

document.body.addEventListener("click", (e) => {
    if(e.target.id == "") {
        return;
    } else {
        playerItem = e.target.id;
        console.log(playerItem);
        gameRound();
    }
})

function computerPlay() {
    let i = Math.floor(Math.random()*3);
    switch(i) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function gameRound(playerSelection = playerItem, computerSelection = computerPlay()) {
    if ((wins<5)&&(losts<5)) {
        if(playerSelection == computerSelection) {
            message.innerText = "No winners";
            console.log("No winners");
            return "No winners";
        } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
            wins++;
            plscore.innerText = wins;
            message.innerText = "You Win! Rock beats Scissors";
            console.log("You Win! Rock beats Scissors");
            return "You Win! Rock beats Scissors";
        } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
            wins++;
            plscore.innerText = wins;
            message.innerText = "You Win! Scissors beats Paper";
            console.log("You Win! Scissors beats Paper");
            return "You Win! Scissors beats Paper";
        } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
            wins++;
            plscore.innerText = wins;
            message.innerText = "You Win! Paper beats Rock";
            console.log("You Win! Paper beats Rock");
            return "You Win! Paper beats Rock";
        } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
            losts++;
            compscore.innerText = losts;
            message.innerText = "You Lose! Rock beats Scissors";
            console.log("You Lose! Rock beats Scissors");
            return "You Lose! Rock beats Scissors";
        } else if ((computerSelection == "scissors") && (playerSelection == "paper")) {
            losts++;
            compscore.innerText = losts;
            message.innerText = "You Lose! Scissors beats Paper";
            console.log("You Lose! Scissors beats Paper");
            return "You Lose! Scissors beats Paper";
        } else if ((computerSelection == "paper") && (playerSelection == "rock")) {
            losts++;
            compscore.innerText = losts;
            message.innerText = "You Lose! Paper beats Rock";
            console.log("You Lose! Paper beats Rock");
            return "You Lose! Paper beats Rock";
        }
    } else if (wins == 5) {
        wins = 0;
        losts = 0;
        compscore.innerText = losts;
        plscore.innerText = wins;
        message.innerText = "You win";
        return console.log("you win");
    } else if (losts == 5) {
        wins = 0;
        losts = 0;
        compscore.innerText = losts;
        plscore.innerText = wins;
        message.innerText = "You losts";
        return console.log("you losts");
    }

}