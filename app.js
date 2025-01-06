var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var submitButton = document.getElementById("submitButton");
var resultElement = document.getElementById("result");

var quizData = [
  {
    question: "What is the capital Of Pakistan?",
    options: ["Lahore", "Karachi", "Islamabad", "Balochistan"],
    correct: "Islamabad",
  },
  {
    question: "What is 2 + 8 - 6?",
    options: ["3", "4", "5", "6"],
    correct: "4",
  },

  {
    question: "What is the square  of 8?",
    options: ["66", "78", "65", "64"],
    correct: "8",
  },
];

var currentQuestionIndex = 0;
var score = 0;

function loadQuestion() {
  var currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    var optionElement = document.createElement("div");
    optionElement.innerHTML = `
              <label>
                  <input type="radio" name="option" value="${option}">
                  ${option}
              </label>
          `;
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer() {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  var answer = selectedOption.value;
  var correctAnswer = quizData[currentQuestionIndex].correct;

  if (answer === correctAnswer) {
    score++;
    resultElement.textContent = "Correct!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
    resultElement.style.color = "red";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    setTimeout(() => {
      resultElement.textContent = "";
      loadQuestion();
    }, 1000);
  } else {
    setTimeout(() => {
      resultElement.textContent = `Quiz completed! Your score is ${score} out of ${quizData.length}.`;
      submitButton.disabled = true;
    }, 1000);
  }
}

submitButton.addEventListener("click", checkAnswer);

loadQuestion();
