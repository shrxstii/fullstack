
// Get HTML elements
const choices = document.querySelectorAll(".choice");

const result = document.getElementById("result");
const details = document.getElementById("details");

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const drawScoreDisplay = document.getElementById("drawScore");

const resetBtn = document.getElementById("resetBtn");

// Score variables
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;


// Computer choice
function getComputerChoice() {

    const options = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];

}


// Check winner
function checkWinner(player, computer) {

    if (player === computer) {

        drawScore++;
        return "It's a Draw!";

    }

    else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {

        playerScore++;
        return "You Won!";

    }

    else {

        computerScore++;
        return "Computer Won!";

    }

}


// Update scoreboard
function updateScore() {

    playerScoreDisplay.textContent = playerScore;

    computerScoreDisplay.textContent = computerScore;

    drawScoreDisplay.textContent = drawScore;

}


// Play game
function playGame(playerChoice) {

    let computerChoice = getComputerChoice();

    let winner = checkWinner(playerChoice, computerChoice);

    result.textContent = winner;

    details.textContent =
        "You chose " + playerChoice +
        " | Computer chose " + computerChoice;

    updateScore();

}


// Add click event to buttons
choices.forEach(button => {

    button.addEventListener("click", function() {

        let playerChoice = button.dataset.choice;

        playGame(playerChoice);

    });

});


// Reset game
resetBtn.addEventListener("click", function() {

    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    updateScore();

    result.textContent = "Make Your Choice!";

    details.textContent = "Waiting for your move...";

});
