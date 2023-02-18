// Initial Global Variables
let questionsContainer = document.querySelector(".questions-container")
let timerElement = document.querySelector(".timer-count")

// Button Global Variables
let startButton = document.querySelector(".start-button")
let clearButton = document.querySelector(".clear-button")
let backButton = document.querySelector(".back-button")
let answer = document.querySelector(".answer")

// Nested Array to store questions and answers for quiz
// let questions = [{
//         prompt: 'What is a named container that allows us to store data in our code?',
//         choices: ['Class', 'Variable', 'Function', 'Object'],
//         answer: 'Class',
//     }, 
//     {
//         prompt: 'What is NOT a primitive datatype in JavaScript?',
//         choices: ['Number', 'Boonlean', 'NULL', 'Array'],
//         answer: 'Array',
//     }, 
//     {
//         prompt: '____ are code structures that listen for activity in the broswer, and run code in response.',
//         choices: ['Query Selectors', 'Event Handlers', 'Objects', 'Functions'],
//         answer: 'Event Handlers',
//     },
//     {
//         prompt: 'Inside which HTML element do we put the JavaScript?',
//         choices: ['<js>', '<javascript>', '<script>', '<head>'],
//         answer: '<script>'
//     },
//     {
//         prompt: 'hold',
//         choices: ['tbd', 'tbd', 'tbd', 'tbd'],
//         answer: 'tbd'
//     }
// ]



// Got this code from Live channel 
// hide start screen
// let startScreenEl = document.getElementById('start-screen');
// startScreenEl.setAttribute('class', 'hide');

// // un-hide questions section
// questionsEl.removeAttribute('class');
// let score = 0;

// Start Game Event Listener
startButton.addEventListener("click", startGame);

// Start Game Function
function startGame () {
    let x = document.getElementById("start-screen");
  
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

let currentAnswer = "answer 3"

// Event listener to clickedAnswer variable, which represents the most recent answer button clicked by user
answer.addEventListener("click", function(event) {
    let element = event.target
    let clickedAnswer 

    if (element.matches(".box")) {
        clickedAnswer = element.textContent;

        console.log(clickedAnswer)
    };   
   
    // Correct Answer Logic
    if (currentAnswer === clickedAnswer) {
        console.log("right answer")
      }
    // Wrong Answer Logic
        else {
          console.log("wrong answer")
        }

});



// Questions Function
// for (let i = 0; i < questions.length; i++) {
//     let response = window.prompt(questions[i.prompt])
//     if (response === questions[i].answer){
//         score++;
//         alert("Correct!");
//     } else {
//         alert ("Wrong!")
//         // Need to add statement to reduce time somehow here
//     }    
    
// }

// You Win Function


// Game Over Function


// End Game Function
function endGame() {
    clearInterval
}
