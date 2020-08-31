const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')



let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
setNextQuestion()
}

function setNextQuestion() {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button') 
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
          button.dataset.correct = answer.correct
      } 
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const slectedButton = e.target
    const correct = slectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove('hide')
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text: 'Hypertext Markup Language', correct: true},
            {text: 'Hold the mayo link', correct: false},
            {text: 'none of the above', correct: false},
            {text: 'Hypertext Makeup Language', correct: false}
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: 'Computer Science Standard', correct: false},
            {text: 'Coding Style Sheets', correct: false},
            {text: 'Cascading Style Sheets', correct: true},
            {text: 'Coding System Styles', correct: false}
        ]
        },
    {
        question: "What does CPU stand for?",
        answers: [
            {text: 'Computer Processor', correct: false},
            {text: 'Calculating Processing Unit', correct: false},
            {text: 'Central Processing Unit', correct: true},
            {text: 'Computer Pricing Unit', correct: false}
        ]
        },
    {
            question: "Which pill did Neo choose?",
            answers: [
                {text: 'Take the blue pill, wake up in your bed and believe whatever you want to believe', correct: false},
                {text: 'Take the red pill and you stay in wonderland and see how deep the rabbit hole goes', correct: true},
                {text: 'neither', correct: false},
                {text: 'You have no idea what this question is about', correct: false}
            ]
            },
        
]
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
