//create question array
var questionContainer = document.querySelector("#progressText")
var asnwerContainer = document.querySelector("#progressBar")
var scoreContainer = document.querySelector("#score")

var index = 0;
var score = 0;

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
        scoreContainer.textContent = score
        checkGame();
    }
    else {
        score -=10;
        scoreContainer.textContent = score
        checkGame();
    }
    //console.log(event)
}
function checkGame(){
    if(index == questionArray.length - 1){
    //end the game
    //show highScore screen
    console.log("Game ended")
    }
    else {
        index++;
        startQuiz();
    }
}
startQuiz()
