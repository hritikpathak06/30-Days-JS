const questions = [
    {
      question: "What is the result of the following expression: 5 + '3' ?",
      answers: [
        { text: "'53'", correct: true },
        { text: "8", correct: false },
        { text: "53", correct: false },
        { text: "NaN", correct: false }
      ]
    },
    {
      question: "What does the 'typeof' operator return for null?",
      answers: [
        { text: "'object'", correct: true },
        { text: "'null'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'number'", correct: false }
      ]
    },
    {
      question: "Which keyword is used to declare variables in JavaScript?",
      answers: [
        { text: "var", correct: true },
        { text: "let", correct: false },
        { text: "const", correct: false },
        { text: "variable", correct: false }
      ]
    },
    {
      question: "What is the result of the following expression: 10 % 3 ?",
      answers: [
        { text: "1", correct: true },
        { text: "3", correct: false },
        { text: "0.33333333", correct: false },
        { text: "10", correct: false }
      ]
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      answers: [
        { text: "Strict equality (compares both value and type)", correct: true },
        { text: "Equality (compares only value)", correct: false },
        { text: "Assignment", correct: false },
        { text: "None of the above", correct: false }
      ]
    },
    {
      question: "Which built-in method returns the length of a string in JavaScript?",
      answers: [
        { text: "length()", correct: false },
        { text: "size()", correct: false },
        { text: "getLength()", correct: false },
        { text: "length", correct: true }
      ]
    },
    {
      question: "What is the result of the following expression: 'Hello' + 'World' ?",
      answers: [
        { text: "'HelloWorld'", correct: true },
        { text: "'Hello World'", correct: false },
        { text: "'HelloWorld!'", correct: false },
        { text: "'Hello World!'", correct: false }
      ]
    },
    {
      question: "Which of the following is NOT a valid JavaScript variable name?",
      answers: [
        { text: "2myVar", correct: true },
        { text: "_myVar", correct: false },
        { text: "$myVar", correct: false },
        { text: "myVar2", correct: false }
      ]
    },
    {
      question: "What does the '||' operator do in JavaScript?",
      answers: [
        { text: "Logical OR (returns true if either operand is true)", correct: true },
        { text: "Logical AND (returns true only if both operands are true)", correct: false },
        { text: "Bitwise OR", correct: false },
        { text: "Bitwise AND", correct: false }
      ]
    },
    {
      question: "Which of the following is a correct way to comment in JavaScript?",
      answers: [
        { text: "// This is a single-line comment", correct: true },
        { text: "<!-- This is a comment -->", correct: false },
        { text: "/* This is a multi-line comment */", correct: false },
        { text: "# This is a comment", correct: false }
      ]
    }
  ];
  

// Document Object Manipulation
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectButton = e.target;
  const isCorrect = selectButton.dataset.correct === "true";
  if (isCorrect) {
    selectButton.classList.add("correct");
    score++;
  } else {
    selectButton.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block"
}

startQuiz();
