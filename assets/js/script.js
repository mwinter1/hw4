// Global Variables
let time = document.getElementById("timer");
let score = document.querySelector(".display-3");
let submit = document.getElementById("buttonInitials");
let input = document.getElementById("inlineFormInput");
let seconds = 50; 
let startButton = document.getElementById("startQuiz");
let cardQuestions = document.getElementById("questions");
let displayJumbo = document.querySelector(".jumbotron");
    // Questions
    let questions = [{
    question: "What are arrow functions?",
    answer1: "N/A",
    answer2: "Shorter syntax for declaring functions",
    answer3: "N/A",
    answer4: "N/A",
    correct: "Shorter syntax for declaring functions"
},{
    question: "What are promises used for?",
    answer1: "N/A",
    answer2: "N/A",
    answer3: "N/A",
    answer4: "To handle asynchronous operations in javascript",
    correct: "To handle asynchronous operations in javascript"
},{
    question: "What is object destructuring?",
    answer1: "A way to extract elements from an object or an array",
    answer2: "N/A",
    answer3: "N/A",
    answer4: "N/A",
    correct: "A way to extract elements from an object or an array"
},{
    question: "What is a Temporal Dead Zone?",
    answer1: "A behaviour that occurs with variables declared using let and const keywords",
    answer2: "N/A",
    answer3: "N/A",
    answer4: "N/A",
    correct: "A behaviour that occurs with variables declared using let and const keywords"
},{
    question: "What does scope determine?",
    answer1: "N/A",
    answer2: "The accessibility of variables and functions at various parts in one’s code",
    answer3: "N/A",
    answer4: "N/A",
    correct: "The accessibility of variables and functions at various parts in one’s code"
    }];
    let answer1 = document.getElementById("button1");
    let answer2 = document.getElementById("button2");
    let answer3 = document.getElementById("button3");
    let answer4 = document.getElementById("button4");
    let question = document.getElementById("questions");
    let correctAnswer = document.getElementById("correctIncorrect");
    let incorrectAnswer = document.getElementById("correctIncorrect");
    let runningQuestion = 0;



// Functions
function Timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = "Time: " + secondsLeft;
      
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          cardQuestions.setAttribute("style", "display: none");
          displayJumbo.setAttribute("style", "display: block");
          yourScore.textContent = "Your score is: " + secondsLeft;
          startButton.setAttribute("style", "display: none");
          submitButton.setAttribute("style", "display: inline");
          inputLine.setAttribute("style", "display: inline-block");
      
          } else if (runningQuestion === 5) {
            clearInterval(timerInterval);
            cardQuestions.setAttribute("style", "display: none");
            displayJumbo.setAttribute("style", "display: block");
            yourScore.textContent = "Your score is: " + secondsLeft;
            startButton.setAttribute("style", "display: none");
            submitButton.setAttribute("style", "display: inline");
            inputLine.setAttribute("style", "display: inline-block");
          }
    }, 1000);
  }

function startGame() {
    setTime();
    firstQuestion();
    cardQuestions.setAttribute("style", "display: block");
    displayJumbo.setAttribute("style", "display: none");

}

// Listeners
startButton.addEventListener("click", startGame);


// Initialization Functions
