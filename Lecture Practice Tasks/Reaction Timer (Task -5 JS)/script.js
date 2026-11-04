
const gameBox = document.getElementById("gameBox");
const gameText = document.getElementById("gameText");
const instruction = document.getElementById("instruction");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");

const bestTimeDisplay = document.getElementById("bestTime");
const lastTimeDisplay = document.getElementById("lastTime");

let timer;
let startTime;

let bestTime = null;
let gameState = "ready";


// Start game
function startGame() {

    clearTimeout(timer);

    gameState = "waiting";

    result.textContent = "";

    gameBox.className = "game-box";

    gameText.textContent = "Wait for Green...";
    instruction.textContent = "Don't click too early!";

    startBtn.disabled = true;

    gameBox.classList.add("waiting");

    // Random delay between 2 and 5 seconds
    let randomDelay = Math.floor(Math.random() * 3000) + 2000;

    timer = setTimeout(function() {

        gameState = "green";

        gameBox.classList.remove("waiting");
        gameBox.classList.add("green");

        gameText.textContent = "CLICK NOW!";
        instruction.textContent = "Click as fast as possible!";

        startTime = Date.now();

    }, randomDelay);

}


// Check player click
function checkReaction() {

    if (gameState === "waiting") {

        clearTimeout(timer);

        gameState = "finished";

        gameText.textContent = "Too Early!";
        instruction.textContent = "You clicked before the green signal.";

        result.textContent = "Try Again!";

        gameBox.className = "game-box";

        startBtn.disabled = false;

    }

    else if (gameState === "green") {

        let reactionTime = Date.now() - startTime;

        gameState = "finished";

        gameBox.className = "game-box";

        gameText.textContent = reactionTime + " ms";
        instruction.textContent = "Your reaction time";

        // Check reaction result
        if (reactionTime <= 400) {

            result.textContent = "Perfect Timing!";

        } else {

            result.textContent = "Too Late!";

        }

        lastTimeDisplay.textContent = reactionTime + " ms";

        // Update best time
        if (bestTime === null || reactionTime < bestTime) {

            bestTime = reactionTime;

            bestTimeDisplay.textContent = bestTime + " ms";

        }

        startBtn.disabled = false;

    }

}


// Game area click
gameBox.addEventListener("click", checkReaction);


// Start button click
startBtn.addEventListener("click", startGame);

