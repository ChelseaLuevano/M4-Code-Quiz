// Initial Global Variables
let questions = document.querySelector(".questions")
let timerElement = document.querySelector(".timer-count")

// Button Global Variables
let startButton = document.querySelector(".start-button")
let clearButton = document.querySelector(".clear-button")
let backButton = document.querySelector(".back-button")

let questions = ["What is a named container that allows us to store data in our code?"]

let answer = [variable]

// questions
"What is a named container that allows us to store data in our code?" answer --> "variable"
"What is NOT a primitive datatype in JavaScript" answer --> "Array" 'Number', 'Boonlean', 'NULL'
"____ are code structures that listen for activity in the broswer, and run code in response." answer --> "Event Handlers" 'Query Selectors', 'Objects', 'Functions'
"Inside which HTML element do we put the JavaScript" answer --> "script" '<js>', '<javascript>', '<head>'


let score = 0;

// Start Game Function


// Questions Function
for (let i = 0; i < questions.length; i++) {
    let response = window.prompt(questions[i.prompt])
    if (response === questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert ("Wrong!")
        // Need to add statement to reduce time somehow here
    }    
    
}

// You Win Function


// Game Over Function


// Correct Answer Function
function correctAnswer{

}

// Wrong Answer Function
function wrongAnswer{

}


// Event listener to generate button
generateBtn.addEventListener("click", correctAnswer);