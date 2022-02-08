var initialInput = document.querySelector("#initialInput")
var initialBtn = document.querySelector("#initialBtn")
var highscoreBoard = document.querySelector("#highscoreBoard")
var initialLocal = JSON.parse(localStorage.getItem("initialValue")) || [];
var highScore = JSON.parse(localStorage.getItem("HighScore"))

console.log(highScore)

function displayHighscore() {

    for (var i = 0; i < initialLocal.length; i++) {
    console.log("HEY")
        //Create a html list element
        var li = document.createElement("li");
        //add text to list element: initial and highscore
        li.textContent = initialLocal[i] + ": " + highScore[i];

        //append to ol
        highscoreBoard.appendChild(li)
    }
}

initialBtn.addEventListener("click", function () {
    var initialVal = (initialInput.value).toString();
    console.log(initialVal)
    console.log(typeof initialVal)

    if (initialVal !== "") {
        initialInput.style.display = "none";

        //push initial value to initial array
        initialLocal.push(initialVal)
        //save initial array to local storage
        localStorage.setItem("initialValue", JSON.stringify(initialLocal));
        displayHighscore()
    }
})

function deleteItems()  {
    localStorage.clear();
    highscoreBoard.style.display = "none"
}

displayHighscore()



