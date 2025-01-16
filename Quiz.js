function transitionToPage(url,container) {
  const currentPage = document.querySelector(`.${container}`);
  currentPage.classList.add('fade-out1');
  setTimeout(() => {
    window.location.href = url;
  }, 2000); // 2-second delay for fade-out

}



const Quiz = document.querySelector('.Quiz');
console.log(Quiz)
if (Quiz) {
  Quiz.addEventListener("click", () => {
      transitionToPage('quiz.html','menuGrid');

  });
}
const questions = [
    { question: "Where did we first meet?", options: ["Park", "Cafe", "Beach"], answer: "Cafe" },
    { question: "What’s my favorite color?", options: ["Red", "Blue", "Yellow"], answer: "Blue" },
  ];

  
  let questionIndex = 0;
  let score = 0;
  
  const questionBox = document.querySelector(".question-box");
  const questionElement = document.querySelector("#question");
  const options = document.querySelector("#options");
  
  function loadQuestion() {
    // Clear previous options
    options.innerHTML = "";
  
    // Display the question
    const currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Display the options
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className = "option-button"; // Optional: Add a class for styling
      button.onclick = () => handleAnswer(option);
      options.appendChild(button);
    });
  }
  
  function handleAnswer(option) {
    const currentQuestion = questions[questionIndex];
  
    if (option === currentQuestion.answer) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert("Oops, try again! 🤔");
    }
  
    questionIndex++;
  
    if (questionIndex < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  
  function showScore() {
    questionBox.innerHTML = `<h2>You scored ${score} out of ${questions.length}!</h2>`;
    const menuButton=document.createElement("button")
    const menuButtonDiv=document.createElement("div");
    menuButton.textContent="Proceed.."
    menuButtonDiv.appendChild(menuButton)
    menuButtonDiv.classList.add('center')
    menuButton.addEventListener('click',()=>{
      transitionToPage("menu.html")
    })

    questionBox.appendChild(menuButtonDiv);

  }
  
  // Load the first question
  loadQuestion();