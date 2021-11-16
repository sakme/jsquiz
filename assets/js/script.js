var pageContentEl = document.querySelector("#page-content");
var timeEl = document.querySelector("#timer");
var countDownTimer = 0
var questionObj = [
    {
        question: "Commonly used data types Do NOT Include:",
        button1: "string",
        button2: "boolean",
        button3: "alerts",
        button4: "numbers"
    },
    {
        question: "The condition in an if / else statement is enclosed with __________.",
        button1: "quotes",
        button2: "curly brackets",
        button3: "parenthesis",
        button4: "square brackets"
    },
    {
        question: "Arrays in JavaScrips can be used to store __________.",
        button1: "numbers and strings",
        button2: "other arrays",
        button3: "booleans",
        button4: "all of the above"
    },
    {
        question: "String values must be enclosed with __________ when being assign to variables.",
        button1: "commas",
        button2: "curly brackets",
        button3: "quotes",
        button4: "parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        button1: "JavaScript",
        button2: "terminal/bash",
        button3: "for loops",
        button4: "console.log"
    }
];
debugger;
timeEl.textContent = "Time: " + countDownTimer;

var startTimer = function() {
    countDownTimer = 60;
    var downloadTimer = setInterval(function(){
        countDownTimer--;
        timeEl.textContent = "Time: " + countDownTimer;
    if(countDownTimer <= 0)
        clearInterval(downloadTimer);
    },1000);
};

startTimer()

// pageContentEl.addEventListener("click", taskButtonHandler);