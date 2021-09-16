let wins = 0;
let losts = 0;
function game() {
    for(;(wins<5)&&(losts<5);) {
        let playerItem = prompt("choose your item");

        function computerPlay() {
            let i = Math.floor(Math.random()*3);
            switch(i) {
                case 0:
                    return "Rock";
                case 1:
                    return "Paper";
                case 2:
                    return "Scissors";
            }
        }
        
        function playerPlay() {
            playerItem = playerItem[0].toUpperCase() + playerItem.toLocaleLowerCase().slice(1);
            return playerItem;
        }
        
        function gameRound(playerSelection = playerPlay(), computerSelection = computerPlay()) {
            if(playerSelection == computerSelection) {
                console.log("no winners");
                return "no winners";
            } else if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
                console.log("You Win! Rock beats Scissors");
                return "You Win! Rock beats Scissors";
            } else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
                console.log("You Win! Scissors beats Paper");
                return "You Win! Scissors beats Paper";
            } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
                console.log("You Win! Paper beats Rock");
                return "You Win! Paper beats Rock";
            } else if ((computerSelection == "Rock") && (playerSelection == "Scissors")) {
                console.log("You Lose! Rock beats Scissors");
                return "You Lose! Rock beats Scissors";
            } else if ((computerSelection == "Scissors") && (playerSelection == "Paper")) {
                console.log("You Lose! Scissors beats Paper");
                return "You Lose! Scissors beats Paper";
            } else if ((computerSelection == "Paper") && (playerSelection == "Rock")) {
                console.log("You Lose! Paper beats Rock");
                return "You Lose! Paper beats Rock";
            }
        }

        let gameResult = gameRound();

        function checkScore() {
            if(gameResult.charAt(4) == "W") {
                return wins++;
            } else {
                return losts++;
            }
        }
        checkScore();
    }
}
game();
if(wins>losts) {
    alert("you win");
} else {
    alert("you lost");
}