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
let finalScore = document.getElementById("final-score");
let initials = document.getElementById("initials").value;

// Button Global Variables
let startButton = document.querySelector(".start-button");
let clearButton = document.querySelector(".clear-button");
let backButton = document.querySelector(".back-button");
let submitButton = document.querySelector(".submit-button");

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
        score = score + 2;
        resultContainer.style.display = 'block';
        lastQuestionResult.textContent = "Right!"
    }
    // Wrong Answer Logic
    else {
        console.log("wrong answer")
        timerCount = timerCount - 10;
        resultContainer.style.display = 'block';
        lastQuestionResult.textContent = "Wrong!"
        // Need to add statement to reduce time somehow here 
    }
    nextQuestion();
    console.log(score);
});

// Next Question
function nextQuestion() {

    if (currentQuestionIndex === -1) {
        currentQuestionIndex=0;
        questionText.textContent = questions[currentQuestionIndex].prompt;
        answer1Text.textContent = questions[currentQuestionIndex].choices[0];
        answer2Text.textContent = questions[currentQuestionIndex].choices[1];
        answer3Text.textContent = questions[currentQuestionIndex].choices[2];
        answer4Text.textContent = questions[currentQuestionIndex].choices[3];
        currentAnswer = questions[currentQuestionIndex].answer;
        currentQuestionIndex++;
    }
    else if (questions.length === currentQuestionIndex) {
        endGame()
    }
    else
     {
        questionText.textContent = questions[currentQuestionIndex].prompt;
        answer1Text.textContent = questions[currentQuestionIndex].choices[0];
        answer2Text.textContent = questions[currentQuestionIndex].choices[1];
        answer3Text.textContent = questions[currentQuestionIndex].choices[2];
        answer4Text.textContent = questions[currentQuestionIndex].choices[3];
        currentAnswer = questions[currentQuestionIndex].answer;
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
    if (timerCount > 0) {
        timerElement.textContent = timerCount;
      // Tests if win condition is met
      if (questions.length === currentQuestionIndex) 
        winGame()
      }
    // Tests if time has run out
    if (timerCount <= 0) {
      // Clears interval
      endGame();
      loseGame();
    }
  }, 1000);
 
}

// Determine User's final score to display on page
finalScore.textContent = score;

// User saves game score to High Scores 
scoreRecord = localStorage.getItem(initials+ " - " + score );
console.log(scoreRecord);


let highScoresData = document.createElement("li");
let userHighScore = document.createTextNode(scoreRecord);
highScoresData.appendChild(userHighScore);
document.getElementById("scores-container").appendChild(highScoresData);

    //     if (scoreRecord === null) {
    //         score = 0;
    //     } else {
    //      //If a value is retrieved from client storage set the winCounter to that value
    //         score = storedRecord;
    //     }

// Submit Button Event Listener
submitButton.addEventListener("click", highScoresDisplay);

// When User submits initials information, display high scores page
function highScoresDisplay (){
    doneContainer.style.display = 'none';
    scoresContainer.style.display = 'block';
}

// End Game Function
function endGame() {
    doneContainer.style.display = 'block';
    questionsContainer.style.display ='none';
    clearInterval(timer);
    }
    
