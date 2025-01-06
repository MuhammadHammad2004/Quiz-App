var quizContainer = document.getElementById("seconde-container");
var questionData = [
  {
    question: "What is Your Name?",
    option: ["Hammad", "Usaid", "Hamza", "Fatima"],
    answer: "Hammad",
    marks: 0,
  },
  {
    question: "What is Father Name?",
    option: ["Hammad", "Usaid", "Hamza", "Fatima"],
    answer: "Siddiq",
    marks: 0,
  },
  {
    question: "What is Father Name?",
    option: ["Hammad", "Usaid", "Hamza", "Fatima"],
    answer: "Siddiq",
    marks: 0,
  },
];

onchange = "userOptHandler()";

for (var i = 0; i < questionData.length; i++) {
  quizContainer.innerHTML += `
    <h2>${questionData[i].question}</h2>
    </br>
    <input name="answer${i + 1}" type="radio" id="answer${
    i + 1
  }_opt1" onchange="userOptHandler('${questionData[i].option[0]}','${
    questionData[i].answer
  }',${i})">
  <label for="answer${i + 1}_opt1">${questionData[i].option[0]}</label>
        <br>
          <input name="answer${i + 1}" type="radio" id="answer${
    i + 1
  }_opt2" onchange="userOptHandler('${questionData[i].option[1]}','${
    questionData[i].answer
  }',${i})">
  <label for="answer${i + 1}_opt1">${questionData[i].option[1]}</label>
        <br>  <input name="answer${i + 1}" type="radio" id="answer${
    i + 1
  }_opt1" onchange="userOptHandler('${questionData[i].option[2]}','${
    questionData[i].answer
  }',${i})">
  <label for="answer${i + 1}_opt1">${questionData[i].option[2]}</label>
        <br>  <input name="answer${i + 1}" type="radio" id="answer${
    i + 1
  }_opt1" onchange="userOptHandler('${questionData[i].option[3]}','${
    questionData[i].answer
  }',${i})">
  <label for="answer${i + 1}_opt1">${questionData[i].option[3]}</label>
        <br>
    `;
}

var userOptHandler = (user_opt, correct_opt, index) => {
  console.log(user_opt);
  console.log(correct_opt);
  console.log(index);
  if (user_opt === correct_opt) {
    questionData[index].marks = 1;
  } else {
    questionData[index].marks = 0;
  }
  console.log(questionData[index].marks);
};

var submitHandler = () => {
  // alert('submitted')
  var totMarks = 0;
  for (var i = 0; i < questionData.length; i++) {
    console.log(questionData[i].marks);
    if (questionData[i].marks === 1) {
      totMarks++;
    }
  }

  console.log("totMarks==> ", totMarks);
  quizContainer.innerHTML = `<h2>Score: ${totMarks} </h2>`;
};

// let currentIndex = 0;

// function nextQuestion() {
//   const questions = document.querySelectorAll("quizContainer");
//   questions[currentIndex].classList.remove("active");
//   currentIndex++;
//   if (currentIndex < questions.length) {
//     questions[currentIndex].classList.add("active");
//   }
// }

// //  <script>
//       // Questions array
//       const questions = [
//         "What is the capital of France?",
//         "What is 2 + 2?",
//         "Who wrote 'To Kill a Mockingbird'?",
//         "What is the square root of 64?",
//       ];

//       let currentQuestionIndex = 0;

//       // Display the first question
//       const questionElement = document.getElementById("question");
//       questionElement.textContent = questions[currentQuestionIndex];

//       // Next button event listener
//       document.getElementById("nextButton").addEventListener("click", () => {
//         currentQuestionIndex++;

//         // Check if there are more questions
//         if (currentQuestionIndex < questions.length) {
//           questionElement.textContent = questions[currentQuestionIndex];
//         } else {
//           questionElement.textContent = "Quiz Completed!";
//           document.getElementById("nextButton").disabled = true; // Disable the button
//         }
//       });
//     // </script>
