
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
        explanation: "getElementById() selects an HTML element using its ID."
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

function showQuestion() {
    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("progress").innerText =
        `Q ${currentQuestion + 1}/${questions.length}`;

    document.getElementById("question").innerText = q.question;
    document.getElementById("score").innerText = `Score: ${score}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    const oldFeedback = document.getElementById("feedback");
    if (oldFeedback) {
        oldFeedback.remove();
    }

    q.options.forEach(function(option) {
        const button = document.createElement("button");

        button.innerText = option;
        button.className = "option";

        button.addEventListener("click", function() {
            if (answered) return;

            answered = true;

            const allOptions = document.querySelectorAll(".option");

            allOptions.forEach(function(btn) {
                btn.disabled = true;

                if (btn.innerText === q.answer) {
                    btn.classList.add("correct");
                }
            });

            const feedback = document.createElement("p");
            feedback.id = "feedback";

            if (option === q.answer) {
                score++;
                feedback.innerText = "Correct! " + q.explanation;
                feedback.style.color = "green";
            } else {
                button.classList.add("wrong");
                feedback.innerText =
                    "Incorrect! Correct answer: " + q.answer +
                    ". " + q.explanation;
                feedback.style.color = "red";
            }

            document.getElementById("score").innerText =
                `Score: ${score}`;

            optionsDiv.after(feedback);
        });

        optionsDiv.appendChild(button);
    });
}

showQuestion();
