var timerEl = document.querySelector("#timer");
var time;
var timerCount = 100;

var questionIndex = 0;

var startbutton = document.querySelector(".start-button");

var questions = [
    {
        title: "Question 1",
        choices: [
            "Choice 1",
            "Choice 2",
            "Choice 3"
        ],
        answer: "Choice 1"
    },
    {
        title: "Question 2",
        choices: [
            "Choice 1",
            "Choice 2",
            "Choice 3"
        ],
        answer: "Choice 1"
    },
    {
        title: "Question 3",
        choices: [
            "Choice 1",
            "Choice 2",
            "Choice 3"
        ],
        answer: "Choice 1"
    },
    {
        title: "Question 4",
        choices: [
            "Choice 1",
            "Choice 2",
            "Choice 3"
        ],
        answer: "Choice 1"
    },
    {
        title: "Question 5",
        choices: [
            "Choice 1",
            "Choice 2",
            "Choice 3"
        ],
        answer: "Choice 1"
    },
]

function startQuiz(){
    console.log("button Works")
    var startScreen = document.querySelector(".start-screen");
    startScreen.setAttribute("class", "hide");

    time = setInterval(function(){
        timerCount--
        timerEl.textContent = timerCount;

        if(timerCount <= 0){
            endQuiz()
        }
    }, 1000)

    displayQuestions();

}

function displayQuestions() {
    var currentQuestion = questions[questionIndex];
    // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    var choice = currentQuestion.choices[i];
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");//class to make button
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    // display on the page
    choicesEl.appendChild(choiceBtn);
  }
}

startbutton.onclick = startQuiz

// Make Front page where it explains what it is and start quiz, timer should also start
//when start quiz button is pressed


//make 5 questions with either multiple choice quesstions or tru or false
//if answer is wrong take 10 seconds off of timer
//repeeat for 5 questins, also next question should appear as soon as answer is picked
//Display wether answer choice was right or wrong


//Display ending of quiz with however many seconds were left as final score
//let use input initials and submit score


//Displau a highscore page where all previous users will be listed until "clear
//high scores" button is pressed.
//if button "Go back" is pressed start over and repet

//class container for questions