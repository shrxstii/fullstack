
const questions = [
    {
        question: "Which language makes web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["int", "let", "define", "string"],
        answer: "let"
    },
    {
        question: "Which method selects an element by its ID?",
        options: [
            "queryAll()",
            "getElementById()",
            "getClass()",
            "selectId()"
        ],
        answer: "getElementById()"
    },
    {
        question: "Which operator checks strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },
    {
        question: "Which method prints a message in the console?",
        options: [
            "console.log()",
            "print()",
            "echo()",
            "write()"
        ],
        answer: "console.log()"
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

    document.getElementById("score").innerText =
        `Score: ${score}`;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    q.options.forEach(function(option) {
        const button = document.createElement("button");

        button.innerText = option;
        button.className = "option";

        button.addEventListener("click", function() {
            if (answered) {
                return;
            }

            answered = true;

            if (option.trim() === q.answer.trim()) {
                score++;
            }

            document.getElementById("score").innerText =
                `Score: ${score}`;

            console.log("Selected:", option);
            console.log("Correct answer:", q.answer);
            console.log("Current score:", score);
        });

        optionsDiv.appendChild(button);
    });
}

showQuestion();
