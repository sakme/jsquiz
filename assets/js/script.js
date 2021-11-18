var counter = 0;
var timeEl = document.querySelector("#timer");
var contentSection = document.querySelector("#content");
var questionSection = document.querySelector("#question");
var correctSection = document.querySelector("#correct");
var wrongSection = document.querySelector("#wrong");
var endSection = document.querySelector("#end");
var countDownTimer = 60;
var questionAnswer = "";
var initials = "";
var score = "";

// create question and answer array
var questionObj = [
    {
        "id": 0,
        "name": "Commonly used data types Do NOT Include:",
        "button1": "1. string",
        "button2": "2. boolean",
        "button3": "3. alerts",
        "button4": "4. numbers",
        "answer": "button3"
    },
    {
        "id": 1,
        "name": "The condition in an if / else statement is enclosed with __________.",
        "button1": "1. quotes",
        "button2": "2. curly brackets",
        "button3": "3. parenthesis",
        "button4": "4. square brackets",
        "answer": "button3"
    },
    {
        "id": 2,
        "name": "Arrays in JavaScrips can be used to store __________.",
        "button1": "1. numbers and strings",
        "button2": "2. other arrays",
        "button3": "3. booleans",
        "button4": "4. all of the above",
        "answer": "button4"
    },
    {
        "id": 3,
        "name": "String values must be enclosed with __________ when being assign to variables.",
        "button1": "1. commas",
        "button2": "2. curly brackets",
        "button3": "3. quotes",
        "button4": "4. parenthesis",
        "answer": "button3"
    },
    {
        "id": 4,
        "name": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "button1": "1. JavaScript",
        "button2": "2. terminal/bash",
        "button3": "3. for loops",
        "button4": "4. console.log",
        "answer": "button4"
    }
];

// set end of array
var lastQuestion = questionObj.length - 1;

//set time left html element
timeEl.textContent = "Time: " + countDownTimer;

// create timer
var startTimer = function() {
    var downloadTimer = setInterval(function(){
        countDownTimer--;
        timeEl.textContent = "Time: " + countDownTimer;
    if(countDownTimer < 0) {
        score = countDownTimer;
        clearInterval(downloadTimer);
        countDownTimer = 0;
        finalScore();
    }
    },1000);
};

// initial page load
var pageLoad = function() {
    var contentDiv = document.createElement("div")
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
    contentPb.innerHTML = "<button id='content_b' type='submit'>Start Quiz</button>";
    contentDiv.appendChild(contentPb);

    contentSection.appendChild(contentDiv);
};

// start quiz
var startQuiz = function() {
    startTimer();
    
    var contentDiv = document.getElementById("content_div");
    contentDiv.parentNode.removeChild(contentDiv);

    questions();
};

// present questions
var questions = function() {
    var i = counter;

        var questionID = questionObj[i].id;
        questionAnswer = questionObj[i].answer;

        if (questionID > 0) {
            var contentDiv = document.getElementById("question_div");
            contentDiv.parentNode.removeChild(contentDiv);
        }

        contentDiv = document.createElement("div");
        contentDiv.setAttribute("id", "question_div");

        var contentH2 = document.createElement("H2");
        contentH2.setAttribute("id", "question_h2");
        contentH2.innerText = questionObj[i].name;
        contentDiv.appendChild(contentH2);

        var contentPb = document.createElement("P");
        contentPb.setAttribute("id", "question_Pb");
        contentPb.innerHTML = "<button id='question_b1' type='submit' name='button1' class='button1'>" + questionObj[i].button1 + "</button>";
        contentDiv.appendChild(contentPb);

        var contentPb = document.createElement("P");
        contentPb.setAttribute("id", "question_Pb");
        contentPb.innerHTML = "<button id='question_b2' type='submit' name='button2' class='button2'>" + questionObj[i].button2 + "</button>";
        contentDiv.appendChild(contentPb);

        var contentPb = document.createElement("P");
        contentPb.setAttribute("id", "question_Pb");
        contentPb.innerHTML = "<button id='question_b3' type='submit' name='button3' class='button3'>" + questionObj[i].button3 + "</button>";
        contentDiv.appendChild(contentPb);

        var contentPb = document.createElement("P");
        contentPb.setAttribute("id", "question_Pb");
        contentPb.innerHTML = "<button id='question_b4' type='submit' name='button4' class='button4'>" + questionObj[i].button4 + "</button>";
        contentDiv.appendChild(contentPb);

        questionSection.appendChild(contentDiv);
        
        var ansBtn1 = document.querySelector("#question_b1")
        var ansBtn2 = document.querySelector("#question_b2")
        var ansBtn3 = document.querySelector("#question_b3")
        var ansBtn4 = document.querySelector("#question_b4")
                
        ansBtn1.addEventListener("click", checkAnswer);
        ansBtn2.addEventListener("click", checkAnswer);
        ansBtn3.addEventListener("click", checkAnswer);
        ansBtn4.addEventListener("click", checkAnswer);
};

// check answers
var checkAnswer = function(event) {
    event.preventDefault();
    var answer = event.target;
    
    //correct answer
    if (answer.matches("." + questionAnswer) && counter < lastQuestion && countDownTimer > 0) {
        var contentDiv = document.createElement("Div");
        contentDiv.setAttribute("id", "correct_div");

        var contentP = document.createElement("P");
        contentP.innerText = "Correct!";
        contentDiv.appendChild(contentP);

        correctSection.appendChild(contentDiv);

        var pauseTimer = function() {
            var pause = 1;
            setInterval(function(){
                if (pause > 0) {
                    pause--;
                    var contentDiv = document.getElementById("correct_div");
                    contentDiv.parentNode.removeChild(contentDiv);
                } else {
                    clearInterval(pause);
                }
            },1000);
        };

        pauseTimer();  

        counter++;
        if (countDownTimer > 0) {
            questions();
        } else {
            score = countDownTimer;
            countDownTimer = 0;
        }
    } // incorrect answer
    else if (!answer.matches("." + questionAnswer) && counter < lastQuestion && countDownTimer > 0) {

        var contentDiv = document.createElement("div");
        contentDiv.setAttribute("id", "wrong_div");

        var contentP = document.createElement("P");
        contentP.innerText = "Wrong!";
        contentDiv.appendChild(contentP);

        wrongSection.appendChild(contentDiv);
        
        var pauseTimer = function() {
            var pause = 1;
            setInterval(function(){
                if (pause > 0) {
                    pause--;
                    var contentDiv = document.getElementById("wrong_div");
                    contentDiv.parentNode.removeChild(contentDiv);
                } else {
                    clearInterval(pause);
                }
            },1000);
        };

        pauseTimer();  

        counter++;
        countDownTimer = countDownTimer - 10;
            if (countDownTimer > 0) {
                questions();
            } else {
                score = countDownTimer;
                countDownTimer = 0;
            }
    } //timeout or finished 
    else {
        score = countDownTimer;
        countDownTimer = 0;
    }
};

var finalScore = function() {
    var contentDiv = document.getElementById("question_div");
    if (contentDiv) {
        contentDiv.parentNode.removeChild(contentDiv);
    }

    contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "end_div");

    var contentH2 = document.createElement("h2");
    contentH2.setAttribute("id", "end_h2");
    contentH2.innerText = "All done!";
    contentDiv.appendChild(contentH2);

    var contentP = document.createElement("P");
    contentP.setAttribute("id", "end_P");
    contentP.innerHTML = "Your final score is " + score + "!";
    contentDiv.appendChild(contentP);

    var contentLabel = document.createElement("label");
    contentLabel.setAttribute("id", "end_P");
    contentLabel.innerHTML = "Enter initials:";
    contentDiv.appendChild(contentLabel);

    var contentInput = document.createElement("input");
    contentInput.setAttribute("id", "end_input");
    contentDiv.appendChild(contentInput);

    var contentB = document.createElement("button");
    contentB.setAttribute("id", "end_b");
    contentB.innerText = "Submit";
    contentDiv.appendChild(contentB);

    endSection.appendChild(contentDiv);
};

pageLoad()

var startBtn = document.querySelector("#content_b")

startBtn.addEventListener("click", startQuiz);