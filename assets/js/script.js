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
let viewHighScores = document.getElementById("view-high-scores");
let userInitials = document.getElementById("initials").value;

// Variables by Query Selector
let highScoreBoard= document.querySelector("#scores-container ol");

    // Button Global Variables
let startButton = document.querySelector(".start-button");
let clearButton = document.querySelector(".clear-button");
let backButton = document.querySelector(".back-button");
let submitButton = document.querySelector(".submit-button");

// Nested Array to store questions and answers for quiz
let questions = [{
        prompt: 'What is a named container that allows us to store data in our code?',
        choices: ['1. Class', '2. Variable', '3. Function', '4. Object'],
        answer: '1. Class',
    }, 
    {
        prompt: 'What is NOT a primitive datatype in JavaScript?',
        choices: ['1. Number', '2. Boonlean', '3. NULL', '4. Array'],
        answer: '4. Array',
    }, 
    {
        prompt: '______ are code structures that listen for activity in the browser, and run code in response.',
        choices: ['1. Query Selectors', '2. Event Handlers', '3. Objects', '4. Functions'],
        answer: '2. Event Handlers',
    },
    {
        prompt: 'Inside which HTML element do we put the JavaScript?',
        choices: ['1. <js>', '2. <javascript>', '3. <script>', '4. <head>'],
        answer: '3. <script>',
    },
    {
        prompt: 'Which are the correct “if” statements to execute certain code if “x” is equal to 2?',
        choices: ['1. if(x 2)', '2. if(x = 2)', '3. if(x != 2 )', '4. if(x == 2)'],
        answer: '4. if(x == 2)',
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
      if (currentQuestionIndex > 6) 
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

// End Game Function
function endGame() {
    doneContainer.style.display = 'block';
    questionsContainer.style.display ='none';
    resultContainer.style.display = 'block';
    clearInterval(timer);
    
    // Determine User's final score to display on page
    finalScore.textContent = score;
  }
    
// Submit Button Event Listener
submitButton.addEventListener("click", highScoresDisplay);

 // User saves game score to High Scores 
//  scoreRecord = localStorage.getItem(initials+ " - " + score );

let highScoresStaticList = [{userInitials:'jfk',score:'3'}, {userInitials:'lax', score:'3'},
    {userInitials:'lax',score:'1'}
];

// When User submits initials information, display high scores page
function highScoresDisplay (){
    doneContainer.style.display = 'none';
    scoresContainer.style.display = 'block'; 
    resultContainer.style.display = 'none';
    startContainer.style.display = 'none';

    // initialsRequirements ();
    // // initialsRequirements
    // function initialsRequirements (){
    //     if (!initials.value.length === 3) {
    //         alert("Enter only 3 letters.");
    //     }
    }
    

    userInitials.textContent = initials.value;


    // highScoreBoard.textContent = highScoresStaticList.userInitials[0] + highScoresStaticList.score[0] ;

    // // Create an ordered list element to store highscores 
    // let highScoresList = document.createElement("ol");

    // // Create ordered list items
    // let userScore1 = document.createElement("li");
    // let userScore2 = document.createElement("li");
    // let userScore3 = document.createElement("li");
    // let userScore4 = document.createElement("li");


    // let userHighScore = document.createTextNode("highscore");
    // highScoresList.appendChild(userHighScore);
    // document.getElementById("scores-container").appendChild(highScoresList);

    // console.log(scoreRecord);



    //     if (scoreRecord === null) {
    //         score = 0;
    //     } else {
    //      //If a value is retrieved from client storage set the winCounter to that value
    //         score = storedRecord;
    //     }

// Back Button Event Listener
backButton.addEventListener("click",goBack);

function goBack (){
    startContainer.style.display = 'block';
    scoresContainer.style.display = 'none'; 
};

// Clear High Scores Button Event Listener
clearButton.addEventListener("click",clearScores);

// this will delete the localStorage data somehow
function clearScores() {

};

// View High Scores will take user to High Scores Container Content when clicked
viewHighScores.addEventListener("click",highScoresDisplay);

