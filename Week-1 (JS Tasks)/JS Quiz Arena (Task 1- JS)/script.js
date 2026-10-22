
const questions = [
    {
        question: "Which language makes web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript",
        explanation: "JavaScript adds interactivity to web pages."
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["int", "let", "define", "string"],
        answer: "let",
        explanation: "The let keyword declares a block-scoped variable."
    },
    {
        question: "Which method selects an element by its ID?",
        options: [
            "queryAll()",
            "getElementById()",
            "getClass()",
            "selectId()"
        ],
        answer: "getElementById()",
        explanation: "It selects an HTML element using its ID."
    },
    {
        question: "Which operator checks strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "===",
        explanation: "The === operator checks equality without type conversion."
    },
    {
        question: "Which method prints a message in the console?",
        options: [
            "console.log()",
            "print()",
            "echo()",
            "write()"
        ],
        answer: "console.log()",
        explanation: "console.log() displays messages in the browser console."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 30;
let timerInterval = null;

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function startTimer() {
    stopTimer();
    timeLeft = 30;

    document.getElementById("timer").innerText =
        `Time: ${timeLeft}s`;

    timerInterval = setInterval(function() {
        timeLeft--;

        document.getElementById("timer").innerText =
            `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            stopTimer();

            if (!answered) {
                handleAnswer(null, true);
            }
        }
    }, 1000);
}

function showQuestion() {
    stopTimer();
    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("progress").innerText =
        `Q ${currentQuestion + 1}/${questions.length}`;

    document.getElementById("question").innerText = q.question;
    document.getElementById("score").innerText = `Score: ${score}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    document.getElementById("feedback")?.remove();
    document.getElementById("nextBtn")?.remove();
    document.getElementById("restartBtn")?.remove();

    q.options.forEach(function(option) {
        const button = document.createElement("button");

        button.innerText = option;
        button.className = "option";

        button.addEventListener("click", function() {
            handleAnswer(option, false);
        });

        optionsDiv.appendChild(button);
    });

    startTimer();
}

function handleAnswer(selectedOption, timedOut) {
    if (answered) return;

    answered = true;
    stopTimer();

    const q = questions[currentQuestion];
    const options = document.querySelectorAll(".option");

    options.forEach(function(button) {
        button.disabled = true;

        if (button.innerText === q.answer) {
            button.classList.add("correct");
        }

        if (button.innerText === selectedOption &&
            selectedOption !== q.answer) {
            button.classList.add("wrong");
        }
    });

    const feedback = document.createElement("p");
    feedback.id = "feedback";

    if (timedOut) {
        feedback.innerText =
            "Time's up! Correct answer: " + q.answer +
            ". " + q.explanation;
        feedback.style.color = "red";
    } else if (selectedOption === q.answer) {
        score++;

        feedback.innerText =
            "Correct! " + q.explanation;
        feedback.style.color = "green";
    } else {
        feedback.innerText =
            "Incorrect! Correct answer: " + q.answer +
            ". " + q.explanation;
        feedback.style.color = "red";
    }

    document.getElementById("score").innerText =
        `Score: ${score}`;

    document.getElementById("options").after(feedback);

    const nextButton = document.createElement("button");
    nextButton.id = "nextBtn";
    nextButton.className = "next-btn";

    nextButton.innerText =
        currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question";

    nextButton.addEventListener("click", function() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResult();
        }
    });

    feedback.after(nextButton);
}

function showResult() {
    stopTimer();

    document.getElementById("progress").innerText =
        "Quiz Completed!";

    document.getElementById("timer").innerText =
        "Time: 0s";

    document.getElementById("question").innerText =
        "Your Final Result";

    document.getElementById("options").innerHTML = "";

    document.getElementById("feedback")?.remove();
    document.getElementById("nextBtn")?.remove();

    document.getElementById("score").innerText =
        `Final Score: ${score}/${questions.length}`;

    const resultMessage = document.createElement("p");
    resultMessage.id = "feedback";

    if (score === questions.length) {
        resultMessage.innerText = "Excellent! Perfect score!";
    } else if (score >= 3) {
        resultMessage.innerText = "Good job! Keep practising.";
    } else {
        resultMessage.innerText = "Keep learning and try again!";
    }

    document.getElementById("score").after(resultMessage);

    const restartButton = document.createElement("button");
    restartButton.id = "restartBtn";
    restartButton.className = "next-btn";
    restartButton.innerText = "Restart Quiz";

    restartButton.addEventListener("click", function() {
        currentQuestion = 0;
        score = 0;
        timeLeft = 30;
        showQuestion();
    });

    resultMessage.after(restartButton);
}

showQuestion();
