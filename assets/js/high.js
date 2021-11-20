var getInput = document.querySelector("#high_score");
var clearScore = document.querySelector("#clear");

var scoreBoard = function() {
    var currentLeader = {
        name: "",
        result: 0
    };
    
    var getLeader = localStorage.getItem("scores");
    
    currentLeader = JSON.parse(getLeader);

    if (currentLeader != null) {
        getInput.value = currentLeader.name + " - " + currentLeader.result;
    } else {
        getInput.value = "No high score yet.";
    }
};

var clearStorage = function() {
    localStorage.clear("scores");
    location.reload();
};

scoreBoard();

clearScore.addEventListener("click", clearStorage);