// Global Variables
let time = document.getElementById("timer");
let score = document.querySelector(".display-3");
let submit = document.getElementById("buttonInitials");
let input = document.getElementById("inlineFormInput");
let seconds = 60; 
let startButton = document.getElementById("startQuiz");
let cardQuestions = document.getElementById("questions");
let displayJumbo = document.querySelector(".jumbotron");
let quizBtn = document.querySelectorAll(".quizBtn");

// Questions
let questions = [{
    question: "What are arrow functions?",
    answer1: "Declarative variables",
    answer2: "Shorter syntax for declaring functions",
    answer3: "Looped integers",
    answer4: "Pseudo code",
    correct: "Shorter syntax for declaring functions"
},{
    question: "What are promises used for?",
    answer1: "Making best friends",
    answer2: "Scoping functions",
    answer3: "Debugging",
    answer4: "To handle asynchronous operations in javascript",
    correct: "To handle asynchronous operations in javascript"
},{
    question: "What is object destructuring?",
    answer1: "A way to extract elements from an object or an array",
    answer2: "Syncing two objects",
    answer3: "Incorrect syntax",
    answer4: "Creating a refined scope from multiple variables",
    correct: "A way to extract elements from an object or an array"
},{
    question: "What is a Temporal Dead Zone?",
    answer1: "A behaviour that occurs with variables declared using let and const keywords",
    answer2: "An area where wifi always drops",
    answer3: "Coding space where no data can be parsed",
    answer4: "Traversing the DOM",
    correct: "A behaviour that occurs with variables declared using let and const keywords"
},{
    question: "What does scope determine?",
    answer1: "How successful you will be in life",
    answer2: "The accessibility of variables and functions at various parts in one’s code",
    answer3: "What browser the code can run on",
    answer4: "If multiple users can access the same site",
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
    let timerInterval = setInterval(function() {
    seconds = seconds - 1; 
    document.getElementById("timer").textContent = seconds; 
      
        if(seconds === 0) {
          clearInterval(timerInterval);
          cardQuestions.setAttribute("style", "display: none");
          displayJumbo.setAttribute("style", "display: block");
          score.textContent = "Your score is: " + secondsLeft;
          startButton.setAttribute("style", "display: none");
          submitButton.setAttribute("style", "display: inline");
          inputLine.setAttribute("style", "display: inline-block");
      
          } else if (runningQuestion === 5) {
            clearInterval(timerInterval);
            cardQuestions.setAttribute("style", "display: none");
            displayJumbo.setAttribute("style", "display: block");
            score.textContent = "Your score is: " + secondsLeft;
            startButton.setAttribute("style", "display: none");
            submitButton.setAttribute("style", "display: inline");
            inputLine.setAttribute("style", "display: inline-block");
          }
    }, 1000);
  }

function startGame() {
    console.log("click");
    Timer();
    firstQuestion();
    cardQuestions.setAttribute("style", "display: block");
    displayJumbo.setAttribute("style", "display: none");
}

function firstQuestion() {
    let quest = questions[runningQuestion];
    question.textContent = quest.question;
    answer1.textContent = quest.answer1;
    answer2.textContent = quest.answer2;
    answer3.textContent = quest.answer3;
    answer4.textContent = quest.answer4;
}

// Listeners
startButton.addEventListener("click", startGame);
// Generalized listener for all question buttons
for (var i = 0; i < quizBtn.length; i++) {
    quizBtn[i].addEventListener("click", function userAnswer(event) {
      event.stopPropagation();
      if (event.currentTarget.innerText === questions[runningQuestion].correct){
      correctAnswer.textContent = "Correct + 5 sec";
      correctAnswer.setAttribute("style", "color: green");
      seconds = seconds + 5;
      console.log("correct");
    } else {
      incorrectAnswer.textContent = "Incorrect - 5 sec";
      incorrectAnswer.setAttribute("style", "color: red");
      seconds = seconds - 5;
      console.log("Incorrect minus 5 seconds");
    }
    console.log(runningQuestion);
    runningQuestion++;
  
    if (runningQuestion < 5) {
      firstQuestion();
    }
  });
  }