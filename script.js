// First we create the variable for the quetion for the quiz as object and answer in array into it.

const questions = [
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyperlinks and Text Markup Langauage', correct: false },
      { text: 'Hiper Text Markup Language', correct: true },
      { text: 'Home tool Markup', correct: false},
      { text: 'Its New Progaming Language', correct: false },
    ]
  },
  {
    question: 'Choose the correct HTML elemnt for the largest heading:',
    answers: [
      { text: '<h6>', correct: false },
      { text: '<head>', correct: false },
      { text: '<heading>', correct: false },
      { text: '<h1>', correct: true },
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Sometimes', correct: false },
      { text: 'Its Amazing!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'Its OK', correct: false }
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Cool Stylish Style', correct: false },
      { text: 'Cascade Style Sheet', correct: true },
      { text: 'Construccion Stardy Scafolding', correct: false },
      { text: 'Casual Style Sheet', correct: false },
    ]
  },
  {
    question: 'Which character is used to indicate and end tag?',
    answers: [
      { text: '!', correct: false },
      { text: '/', correct: true },
      { text: '<', correct: false },
      { text: '^', correct: false }
    ]
  },
]

// Create the links with the button and element of Html

const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-choices')


// create variable for radom order of questions

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// Function to run the Quiz

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
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
    button.classList.add('button')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

// Set up timer for quiz

var count= 50;

var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count=== 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';

    alert("The Time is up!!");
  }
}, 1000);