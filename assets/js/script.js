var timeEl = document.querySelector("#timer");
var contentSection = document.querySelector("#content");
// var contentDiv = document.querySelector("#content_div");
// var contentH2 = document.querySelector("#content_h2");
// var contentP = document.querySelector("#content_p");
// var contentPb = document.querySelector("#content_pb");
// var contentB = document.querySelector("#content_b");
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

var pageLoad = function() {
    var contentDiv = document.createElement("Div")
    contentDiv.setAttribute("id", "content_div")

    var contentH2 = document.createElement("H2");
    contentH2.setAttribute("id", "content_h2")
    contentH2.innerText = "Coding Quiz Challenge";
    contentDiv.appendChild(contentH2);

    var contentP = document.createElement("P");
    contentP.setAttribute("id", "content_p");
    contentP.innerText = "Try to answer the following code related questions within the time limit." + 
        "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    contentDiv.appendChild(contentP);

    var contentPb = document.createElement("P");
    contentPb.setAttribute("id", "contentPb");
    contentPb.innerHTML = "<button id='content_b'>Start Quiz</button>";
    contentDiv.appendChild(contentPb);

    contentSection.appendChild(contentDiv);
};

var startQuiz = function() {
    event.preventDefault();
    startTimer();
};

pageLoad()

contentSection.addEventListener("click", startQuiz);