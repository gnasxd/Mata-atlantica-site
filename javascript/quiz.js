const questions = [
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
 {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
    {
        question: "Qual a porcentagem aproximada da Mata Atlântica original que ainda resta?",
        respostas: [
            { id: 1, resposta: "50%", correct: false },
            { id: 2, resposta: "30%", correct: false },
            { id: 3, resposta: "12,4%", correct: true },
            { id: 4, resposta: "5%", correct: false }
        ],
    },
]

const questionElement = document.getElementById("questões");
const answerButtons = document.getElementById("botões-resposta");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima Pergunta";
    showQuestion();
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.respostas.forEach(resposta => {
        const button = document.createElement("button");
        button.innerHTML = resposta.resposta;
        button.dataset.id = resposta.id;
        button.classList.add("btn-quiz1");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
};
function selectAnswer(e) {
    respostas = questions[currentQuestionIndex].respostas;
    const correctAnswer = respostas.filter((resposta) => resposta.correct == true)[0];

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.id == correctAnswer.id;

    if (isCorrect){
        selectedButton.classList.add("correct")
        score++;
    }
    else {
        selectedButton.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `Você pontuou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Reiniciar Quiz?";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
       handleNextButton();
    }else {
        startQuiz();
    }
})
startQuiz();