var timerEl = document.querySelector("#timer");
var time;
var timerCount = 100;

var questionIndex = 0;

var startbutton = document.querySelector(".start-button");

var questionEl = document.querySelector(".question")
var choicesEl = document.querySelector(".choices")

var questions = [
    {
        title: "What is the correct way to link JavaScript File?",
        choices: [
            "<script href= 'file.js'>",
            "<script src='.js'>",
            "<script name='file.js'>",
            "<script src='file.js'>"
        ],
        answer: "Choice 4"
    },
    {
        title: "How do you display content in JavaScript?",
        choices: [
            "console.log('content');",
            "print('content')",
            "cout << 'content';",
            "echo 'content';"
        ],
        answer: "Choice 1"
    },
    {
        title: "How to comment in JavaScript?",
        choices: [
            "/Comment",
            "<Comment>",
            "//Comment",
            "*Comment"
        ],
        answer: "Choice 3"
    },
    {
        title: "How do you declare a variable in JavaScript?",
        choices: [
            "v variableName;",
            "var variable Name;",
            "variable varibleName;",
            "string variableName;"
        ],
        answer: "Choice 2"
    },
    {
        title: "Which sign does jQuery use as a shortcut?",
        choices: [
            "$",
            "?",
            "%",
            "!"
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
        timerEl.textContent = "Time: " + timerCount;

        if(timerCount <= 0){
            // endQuiz()
            return;
        }
    }, 1000)

    displayQuestions();

}

function displayQuestions() {
    console.log("Function Works")
    var currentQuestion = questions[questionIndex];
    // loop over choices

    questionEl.textContent = currentQuestion.title;

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