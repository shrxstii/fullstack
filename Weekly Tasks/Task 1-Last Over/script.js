
let runs = 0;
let ballsPlayed = 0;
let wickets = 0;
let target = 12;

let currentDelivery = null;
let deliveryTimer;
let nextBallTimer;

let gameOver = false;

let ball = document.getElementById("ball");
let hitButton = document.getElementById("hitButton");

let best = Number(localStorage.getItem("bestScore")) || 0;

document.getElementById("best").innerText = best;


// Start Game

function startGame() {

    clearTimeout(deliveryTimer);
    clearTimeout(nextBallTimer);

    runs = 0;
    ballsPlayed = 0;
    wickets = 0;

    gameOver = false;
    currentDelivery = null;

    let difficulty = document.getElementById("difficulty").value;

    if (difficulty === "easy") {
        target = 8;
    }
    else if (difficulty === "medium") {
        target = 12;
    }
    else {
        target = 16;
    }

    document.getElementById("target").innerText = target;

    document.getElementById("result").innerText = "";

    document.getElementById("commentary").innerText =
        "Get ready! First ball coming!";

    ball.style.transition = "none";
    ball.style.left = "8%";

    updateScore();

    hitButton.disabled = true;

    nextBallTimer = setTimeout(startDelivery, 1000);
}


// Ball Movement

function startDelivery() {

    if (gameOver) return;

    currentDelivery = {
        start: performance.now(),
        duration: getSpeed()
    };

    hitButton.disabled = false;

    ball.style.transition = "none";
    ball.style.left = "8%";

    setTimeout(function() {

        if (currentDelivery !== null) {

            ball.style.transition =
                "left " + currentDelivery.duration + "ms linear";

            ball.style.left = "78%";
        }

    }, 50);

    document.getElementById("commentary").innerText =
        "Ball is coming... Hit at the right time!";

    deliveryTimer = setTimeout(function() {

        if (currentDelivery !== null) {
            currentDelivery = null;
            hitButton.disabled = true;

            ballsPlayed++;

            missBall();

            updateScore();
            checkGame();

        }

    }, currentDelivery.duration + 200);
}


// Difficulty Speed

function getSpeed() {

    let difficulty = document.getElementById("difficulty").value;

    if (difficulty === "easy") {
        return 1800;
    }
    else if (difficulty === "medium") {
        return 1300;
    }
    else {
        return 900;
    }
}


// Hit Ball

function hitBall() {

    if (currentDelivery === null || gameOver) {
        return;
    }

    let elapsed = performance.now() - currentDelivery.start;

    let perfectTime = currentDelivery.duration * 0.82;

    let difference = Math.abs(elapsed - perfectTime);

    clearTimeout(deliveryTimer);

    currentDelivery = null;
    hitButton.disabled = true;

    ballsPlayed++;

    if (difference <= 90) {

        runs += 6;

        document.getElementById("commentary").innerText =
            "SIX! What a fantastic shot!";

    }

    else if (difference <= 200) {

        runs += 4;

        document.getElementById("commentary").innerText =
            "FOUR! Beautiful shot!";

    }

    else if (difference <= 330) {

        runs += 1;

        document.getElementById("commentary").innerText =
            "Single run!";

    }

    else {

        missBall();

    }

    updateScore();
    checkGame();
}


// Missed Ball

function missBall() {

    let chance = Math.random();

    if (chance < 0.3) {

        wickets++;

        document.getElementById("commentary").innerText =
            "OUT! The batter is bowled!";

    }

    else {

        document.getElementById("commentary").innerText =
            "Dot Ball! No runs scored.";

    }

}


// Update Scoreboard

function updateScore() {

    document.getElementById("runs").innerText = runs;

    document.getElementById("balls").innerText =
        6 - ballsPlayed;

    document.getElementById("wickets").innerText = wickets;

    let needed = Math.max(0, target - runs);

    document.getElementById("needed").innerText =
        needed + " Runs Needed";
}


// Check Win or Lose

function checkGame() {

    if (runs >= target) {

        endGame("YOU WON! 🏆");

    }

    else if (wickets >= 2) {

        endGame("YOU LOST! All wickets gone.");

    }

    else if (ballsPlayed >= 6) {

        endGame("YOU LOST! Target not reached.");

    }

    else {

        nextBallTimer = setTimeout(startDelivery, 1200);

    }

}


// End Game

function endGame(message) {

    gameOver = true;

    currentDelivery = null;

    clearTimeout(deliveryTimer);
    clearTimeout(nextBallTimer);

    hitButton.disabled = true;

    ball.style.transition = "none";
    ball.style.left = "8%";

    document.getElementById("result").innerText = message;

    document.getElementById("commentary").innerText =
        "Final Score: " + runs + " runs in " + ballsPlayed + " balls.";

    if (runs > best) {

        best = runs;

        localStorage.setItem("bestScore", best);

        document.getElementById("best").innerText = best;

    }

}


// Spacebar Support

document.addEventListener("keydown", function(event) {

    if (event.code === "Space") {

        event.preventDefault();

        hitBall();

    }

});