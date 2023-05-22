const quizData = [
    {
        question: "How old is saloni",
        a: "10",
        b: "19",
        c: "26",
        d: "110",
        correct: "b",
    },
    {
        question: "What is the capital city of Australia",
        a: "Sydney",
        b: "Melbourne",
        c: "Canberra",
        d: "Perth",
        correct: "Canberra"
    },
    {
        question: "Who is the President of US?",
        a: "Narendra Modi",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "Who wrote the famous novel To Kill a Mockingbird",
        a: "F. Scott Fitzgerald",
        b:"Ernest Hemingway",
        c: "Harper Lee",
        d:" Mark Twain",
        correct: "c",
    },
    {
        question: "Which country is known as The Land of the Rising",
        a:"China",
        b:"India",
        c:"South Korea",
        d:"Japan",
         correct:'d',
    }, 
    {
        question:" Who painted the famous artwork,The Starry Night",
        a: "Vincent van Gogh",
        b:" Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Claude Monet",
        correct: 'a'
    }    
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});


