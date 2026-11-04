
const icons = [
    "🍎", "🍎",
    "🍌", "🍌",
    "🍇", "🍇",
    "🍒", "🍒",
    "🍉", "🍉",
    "🍍", "🍍",
    "🥝", "🥝",
    "🍓", "🍓"
];

const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const movesDisplay = document.getElementById("moves");
const message = document.getElementById("message");

let firstCard = null;
let secondCard = null;

let score = 0;
let moves = 0;
let matchedPairs = 0;
let lockBoard = false;


// Start game
function startGame() {

    grid.innerHTML = "";

    score = 0;
    moves = 0;
    matchedPairs = 0;

    firstCard = null;
    secondCard = null;
    lockBoard = false;

    scoreDisplay.textContent = 0;
    movesDisplay.textContent = 0;
    message.textContent = "";

    let shuffledIcons = [...icons];

    shuffledIcons.sort(() => Math.random() - 0.5);

    shuffledIcons.forEach(icon => {

        let card = document.createElement("button");

        card.className = "card";
        card.textContent = "?";
        card.dataset.icon = icon;

        card.addEventListener("click", function() {
            flipCard(card);
        });

        grid.appendChild(card);

    });
}


// Flip card
function flipCard(card) {

    if (
        lockBoard ||
        card.classList.contains("flipped") ||
        card.classList.contains("matched")
    ) {
        return;
    }

    card.textContent = card.dataset.icon;
    card.classList.add("flipped");

    if (firstCard === null) {

        firstCard = card;

    } else {

        secondCard = card;
        moves++;

        movesDisplay.textContent = moves;

        checkMatch();

    }
}


// Check matching
function checkMatch() {

    lockBoard = true;

    if (firstCard.dataset.icon === secondCard.dataset.icon) {

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        score++;
        matchedPairs++;

        scoreDisplay.textContent = score;

        resetTurn();

        if (matchedPairs === 8) {
            message.textContent = "Congratulations! You Won!";
        }

    } else {

        setTimeout(function() {

            firstCard.textContent = "?";
            secondCard.textContent = "?";

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            resetTurn();

        }, 1000);

    }
}


// Reset turn
function resetTurn() {

    firstCard = null;
    secondCard = null;
    lockBoard = false;

}


// Restart button
document.getElementById("restart").addEventListener("click", startGame);


// Start game when page loads
startGame();
