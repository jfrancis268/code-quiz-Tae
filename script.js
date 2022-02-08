//create question array
var questionContainer = document.querySelector("#progressText")
var asnwerContainer = document.querySelector("#progressBar")
var scoreContainer = document.querySelector("#score")
var currentTime = document.querySelector("#currentTime")

var timer = document.querySelector("#timer");


var index = 0;
var score = 0;
var countdown = 60;
var holdInterval = 0;

var scoreArr = JSON.parse(localStorage.getItem("HighScore")) || [];

var questionArray = [
    {
        question: "Commonly used data types DO NOT include",
        answers: ["strings", "boolean", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within _____",
        answers: ["quotes", "curly brackets", "parenthesis", "square backets"],
        correct: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store",
        answers: ["numbers and strings", "other arrays", "booleans", "all choices"],
        correct: "all choices"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
    }
]

function startTimer(){
    var timerInterval = setInterval(function (){
        countdown--;
        timer.textContent = "time: " + countdown;
        if(countdown <= 0){
            clearInterval(timerInterval);
            Exit();
        }
    }, 1000);
}

// timer.addEventListener("click", function () {
//     // We are checking zero because its originally set to zero
//     if (holdInterval === 0) {
//         holdInterval = setInterval(function () {
//             countdown--;
//             timer.textContent = "Time: " + countdown;

//             if (countdown <= 0) {
//                 clearInterval(holdInterval);
//                 allDone();
//                 currentTime.textContent = "Time's up!";
//             }
//         }, 1000);
//     }
//     render(questionIndex);
// });

function startQuiz() {
    console.log("Hello");
    //display question to questionContainer 
    questionContainer.textContent = questionArray[index].question

    //clear out old information

    asnwerContainer.textContent = ""

    //loop through the answers

    for (var i = 0; i < questionArray[index].answers.length; i++) {
        //for everyone answer, create a button with the answer on it
        var answerBtn = document.createElement("button")
        answerBtn.classList.add("answerBtn")
        answerBtn.textContent = questionArray[index].answers[i]
        //append the button to asnwer container

        asnwerContainer.appendChild(answerBtn)
        answerBtn.onclick = checkAnswer;
    }

    //when user select an answer
    //call startQuiz
}

function checkAnswer(event) {
    event.preventDefault();
    var choice = this.textContent

    if (choice == questionArray[index].correct) {
        score += 10;
        alert("correct!")
        scoreContainer.textContent = score
        checkGame();

    }
    else {
        score -=10;
        countdown -= 10;
        alert("incorrect :o")
        scoreContainer.textContent = score
        timer.textContent = countdown
        checkGame();
    }

    //console.log(event)
}
function checkGame(){
    if(index == questionArray.length - 1){
    //end the game
    //show highScore screen
    scoreArr.push(score)
    localStorage.setItem("HighScore", JSON.stringify(scoreArr))
    console.log("Game ended")
    window.location.href = "highscore.html"
    }
    else {
        index++;
        startQuiz();
    }
}
startQuiz()
