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
        question: "Quantos estados brasileiros a Mata Atlântica abrange?",
        respostas: [
            { id: 1, resposta: "10", correct: false },
            { id: 2, resposta: "13", correct: false },
            { id: 3, resposta: "15", correct: false },
            { id: 4, resposta: "17", correct: true }    
        ],
    },
    {
        question: "Qual animal é considerado o símbolo da Mata Atlântica?",
        respostas: [
            { id: 1, resposta: "Arara-azul", correct: false },
            { id: 2, resposta: "Mico-leão-dourado", correct: true },
            { id: 3, resposta: "Tamanduá-bandeira", correct: false },
            { id: 4, resposta: "Onça-pintada", correct: false }
        ],
    },
    {
        question: "Em que ano foi aprovado a Lei da Mata Atlântica no Brasil?",
        respostas: [
            { id: 1, resposta: "1988", correct: false },
            { id: 2, resposta: "2000", correct: false },
            { id: 3, resposta: "2006", correct: true },
            { id: 4, resposta: "2012", correct: false }
        ],
    },
    {
        question: "Aproximadamente quantas espécies de plantas são encontradas na Mata Atlântica?",
        respostas: [
            { id: 1, resposta: "20.000", correct: true },
            { id: 2, resposta: "10.000", correct: false },
            { id: 3, resposta: "5.000", correct: false },
            { id: 4, resposta: "15.000", correct: false }
        ],
    },
    {
        question: "Quantas pessoas dependem da Mata Atlântica para abastecimento de água?",
        respostas: [
            { id: 1, resposta: "50 milhões", correct: false },
            { id: 2, resposta: "80 milhões", correct: false },
            { id: 3, resposta: "100 milhões", correct: false },
            { id: 4, resposta: "120 milhões", correct: true }
        ],
    },
    {
        question: "O que é uma especie endêmica?",
        respostas: [
            { id: 1, resposta: "Espécie que migra entre biomas", correct: false },
            { id: 2, resposta: "Espécie encontrada em uma região específica", correct: true },
            { id: 3, resposta: "Espécie que está em perigo de extinção", correct: false },
            { id: 4, resposta: "Espécie invasora", correct: false }
        ],
    },
    {
        question: "Qual ciclo econômico causou grande destruição da Mata Atlântica no período colonial?",
        respostas: [
            { id: 1, resposta: "Ciclo do ouro", correct: false },
            { id: 2, resposta: "Ciclo da borracha", correct: false },
            { id: 3, resposta: "Ciclo do pau-brasil", correct: true },
            { id: 4, resposta: "Ciclo do algodão", correct: false }
        ],
    },
    {
        question: "A Mata Atlântica é considerada um hotspot de biodiversidade. Quantos hotspots existem no mundo?",
        respostas: [
            { id: 1, resposta: "10", correct: false },
            { id: 2, resposta: "20", correct: false },
            { id: 3, resposta: "34", correct: true },
            { id: 4, resposta: "50", correct: false }
        ],
    },
    {
        question: "O que são corredores ecológicos?",
        respostas: [
            { id: 1, resposta: "Trilha para turismo ecológico", correct: false },
            { id: 2, resposta: "Faixas de vegetações que conectam fragmentos florestais", correct: true },
            { id: 3, resposta: "Rios que atravessam a floresta", correct: false },
            { id: 4, resposta: "Estradas dentro de parques nacionais", correct: false }
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
        if (button.dataset.id == correctAnswer.id) {
            button.classList.add("correct");
        }
        button.disabled = true;
        const explicacao = document.createElement("p");
        explicacao.classList.add("explicacao");
        if (isCorrect) {
            explicacao.innerHTML = "Resposta correta!";
        } else {
            explicacao.innerHTML = "Resposta incorreta! A resposta correta é: " + correctAnswer.resposta;
        }
        answerButtons.appendChild(explicacao);
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