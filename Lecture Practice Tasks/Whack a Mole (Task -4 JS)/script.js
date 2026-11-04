
const holes = document.querySelectorAll(".hole");

const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");

let score = 0;
let timeLeft = 30;
let molePosition = -1;

let gameInterval;
let timerInterval;
let gameRunning = false;


// Show mole randomly
function showMole() {

    // Remove previous mole
    holes.forEach(hole => {
        hole.textContent = "";
        hole.classList.remove("mole");
    });

    // Generate random position
    let newPosition = Math.floor(Math.random() * 9);

    while (newPosition === molePosition) {
        newPosition = Math.floor(Math.random() * 9);
    }

    molePosition = newPosition;

    // Display mole
    holes[molePosition].textContent = "🐹";
    holes[molePosition].classList.add("mole");

}


// Start game
function startGame() {

    clearInterval(gameInterval);
    clearInterval(timerInterval);

    score = 0;
    timeLeft = 30;
    molePosition = -1;

    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;

    message.textContent = "Catch the mole!";
    startBtn.textContent = "Restart Game";

    gameRunning = true;

    showMole();

    // Change mole position every 800 milliseconds
    gameInterval = setInterval(showMole, 800);

    // Countdown timer
    timerInterval = setInterval(function() {

        timeLeft--;

        timerDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            endGame();
        }

    }, 1000);

}


// Check clicked hole
holes.forEach((hole, index) => {

    hole.addEventListener("click", function() {

        if (!gameRunning) {
            return;
        }

        if (index === molePosition) {

            score++;

            scoreDisplay.textContent = score;

            // Move mole immediately after successful click
            showMole();

        }

    });

});


// End game
function endGame() {

    clearInterval(gameInterval);
    clearInterval(timerInterval);

    gameRunning = false;
    molePosition = -1;

    holes.forEach(hole => {
        hole.textContent = "";
        hole.classList.remove("mole");
    });

    message.textContent = "Game Over! Your Score: " + score;

    startBtn.textContent = "Play Again";

}


// Start button
startBtn.addEventListener("click", startGame);
