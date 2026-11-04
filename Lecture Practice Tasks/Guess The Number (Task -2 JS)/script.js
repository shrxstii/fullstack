
let secretNumber = Math.floor(Math.random() * 100) + 1;
let chancesLeft = 7;
let guesses = [];

const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const chances = document.getElementById("chances");
const numberBox = document.getElementById("numberBox");
const history = document.getElementById("history");
const newGame = document.getElementById("newGame");

guessForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let guess = Number(guessInput.value);

    if (guess < 1 || guess > 100 || !Number.isInteger(guess)) {
        message.textContent = "Please enter a number from 1 to 100!";
        return;
    }

    if (guesses.includes(guess)) {
        message.textContent = "You already guessed this number!";
        return;
    }

    guesses.push(guess);
    chancesLeft--;

    chances.textContent = chancesLeft;
    history.textContent = guesses.join(", ");

    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        numberBox.textContent = secretNumber;
        endGame();
    } 
    else if (guess < secretNumber) {
        message.textContent = "📈 Too low! Try a higher number.";
    } 
    else {
        message.textContent = "📉 Too high! Try a lower number.";
    }

    if (guess !== secretNumber && chancesLeft === 0) {
        message.textContent = "😢 Game over! The number was " + secretNumber;
        numberBox.textContent = secretNumber;
        endGame();
    }

    guessInput.value = "";
});

function endGame() {
    guessInput.disabled = true;
    guessForm.querySelector("button").disabled = true;
}

newGame.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    chancesLeft = 7;
    guesses = [];

    chances.textContent = chancesLeft;
    numberBox.textContent = "?";
    message.textContent = "Your adventure starts here!";
    history.textContent = "No guesses yet";

    guessInput.disabled = false;
    guessForm.querySelector("button").disabled = false;
    guessInput.value = "";
});
