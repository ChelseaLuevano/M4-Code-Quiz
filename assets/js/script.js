// Initial Global Variables
let timerElement = document.querySelector(".timer-count")
let timer;
let timerCount;
let score = 0;
let currentAnswer;
let currentQuestionIndex;

// Variables by Element ID
let startContainer = document.getElementById("start-container");
let questionsContainer = document.getElementById("questions-container");
let resultContainer = document.getElementById("result-container");
let scoresContainer = document.getElementById("scores-container");
let doneContainer = document.getElementById("done-container");
let questionText = document.getElementById("question");
let answer = document.getElementById("answer");
let answer1Text = document.getElementById("answer1");
let answer2Text = document.getElementById("answer2");
let answer3Text = document.getElementById("answer3");
let answer4Text = document.getElementById("answer4");
let lastQuestionResult = document.getElementById("result");


// Button Global Variables
let startButton = document.querySelector(".start-button")
let clearButton = document.querySelector(".clear-button")
let backButton = document.querySelector(".back-button")




// Nested Array to store questions and answers for quiz
let questions = [{
        prompt: 'What is a named container that allows us to store data in our code?',
        choices: ['Class', 'Variable', 'Function', 'Object'],
        answer: 'Class',
    }, 
    {
        prompt: 'What is NOT a primitive datatype in JavaScript?',
        choices: ['Number', 'Boonlean', 'NULL', 'Array'],
        answer: 'Array',
    }, 
    {
        prompt: '____ are code structures that listen for activity in the broswer, and run code in response.',
        choices: ['Query Selectors', 'Event Handlers', 'Objects', 'Functions'],
        answer: 'Event Handlers',
    },
    {
        prompt: 'Inside which HTML element do we put the JavaScript?',
        choices: ['<js>', '<javascript>', '<script>', '<head>'],
        answer: '<script>',
    },
    {
        prompt: 'Which are the correct “if” statements to execute certain code if “x” is equal to 2?',
        choices: ['if(x 2)', 'if(x = 2)', 'if(x != 2 )', 'if(x == 2)'],
        answer: 'if(x == 2)',
    }
]

// Initial containers to hide when page loads
questionsContainer.style.display ='none';
scoresContainer.style.display = 'none';
resultContainer.style.display = 'none';
doneContainer.style.display = 'none';

// Start Game Event Listener
startButton.addEventListener("click", startGame);

// Start Game Function and display first question
function startGame () {
    startContainer.style.display = "none"; 
    // new game
    currentQuestionIndex = -1
    questionsContainer.style.display = "block";
    timerCount = 75;
    startTimer();
    nextQuestion();
}

// Event listener to clickedAnswer variable, which represents the most recent answer button clicked by user
answer.addEventListener("click", function(event) {
    let element = event.target
    let clickedAnswer; 

    if (element.matches(".box")) {
        clickedAnswer = element.textContent;

        console.log(clickedAnswer)
    };   
        console.log(currentAnswer)

     // Correct Answer Logic
    if (currentAnswer === clickedAnswer) {
        console.log("right answer")
        score++;
        resultContainer.style.display = 'block';
        lastQuestionResult.textContent = "Right!"
    }
        
    else {
        console.log("wrong answer")
        resultContainer.style.display = 'block';
        lastQuestionResult.textContent = "Wrong!"
        // Need to add statement to reduce time somehow here 
    }
    nextQuestion();
    scoreRecord = localStorage.getItem("score");
        if (scoreRecord === null) {
            score = 0;
        } else {
         //If a value is retrieved from client storage set the winCounter to that value
            score = storedRecord;
        }
    console.log(score);
});


// Next Question
function nextQuestion() {

    if (currentQuestionIndex === -1) {
        i=0;
        questionText.textContent = questions[i].prompt;
        answer1Text.textContent = questions[i].choices[0];
        answer2Text.textContent = questions[i].choices[1];
        answer3Text.textContent = questions[i].choices[2];
        answer4Text.textContent = questions[i].choices[3];
        currentAnswer = questions[i].answer;
        currentQuestionIndex++;
    }
    else if (questions.length === currentQuestionIndex && document.getElementById(answer).click) {
        endGame()
    }
    else
     {
        i++;
        questionText.textContent = questions[i].prompt;
        answer1Text.textContent = questions[i].choices[0];
        answer2Text.textContent = questions[i].choices[1];
        answer3Text.textContent = questions[i].choices[2];
        answer4Text.textContent = questions[i].choices[3];
        currentAnswer = questions[i].answer
        currentQuestionIndex++;
    }
}
  
// Win Game Function
function winGame () {
    console.log("You Win")
}


// Lose Game Function
function loseGame () {
    console.log("You Lose")
}

// The startTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount > 0) {
      // Tests if win condition is met
      if (questions.length === currentQuestionIndex) 
        winGame()
      }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// End Game Function
function endGame() {
    doneContainer.style.display = 'block';
    questionsContainer.style.display ='none';
    if (winGame || loseGame){
        clearInterval(timer)

    }
    
}
