console.log("Connected");






var playerOneTurn = true;
var isClicked = false;




var p1Image = document.getElementById("image1");
var p2Image = document.getElementById("image2");
p1Image.classList.toggle("isTurn");


var p1DisplayScore = document.getElementById("p1PointsTotal");
var p2DisplayScore = document.getElementById("p2PointsTotal");
var p1TotalScore = 0;
var p2TotalScore = 0;



var iTurn = 0;
var p1TurnScore;
var p2TurnScore;
var p1TurnWord;
var p2TurnWord;





var wordInput = document.getElementById("wordInput");
var wordScoreInput = document.getElementById("wordScoreInput");

var submitButton = document.getElementById("submitButton");
var skipButton = document.getElementById("skipButton");






submitButton.addEventListener("click", function() {

	p1TurnWord = document.querySelectorAll("#playerScoreboard1 tr td:nth-child(1)")[iTurn];
	p1TurnScore = document.querySelectorAll("#playerScoreboard1 tr td:nth-child(2)")[iTurn];
	p2TurnWord = document.querySelectorAll("#playerScoreboard2 tr td:nth-child(1)")[iTurn];
	p2TurnScore = document.querySelectorAll("#playerScoreboard2 tr td:nth-child(2)")[iTurn];

	if (!isClicked) {
		startTimer();
		isClicked = !isClicked;
	}




	if (playerOneTurn === true) {

		p1TurnScore.textContent = wordScoreInput.value;
		p1TurnWord.textContent = wordInput.value;

		p1TotalScore += Number(wordScoreInput.value);
		p1DisplayScore.textContent = p1TotalScore;

		wordInput.value = "";
		wordScoreInput.value = "";
	} else {

		p2TurnScore.textContent = wordScoreInput.value;
		p2TurnWord.textContent = wordInput.value;

		p2TotalScore += Number(wordScoreInput.value);
		p2DisplayScore.textContent = p2TotalScore;

		wordInput.value = "";
		wordScoreInput.value = "";

		iTurn++;
	}

	p1Image.classList.toggle("isTurn");
	p2Image.classList.toggle("isTurn");
	playerOneTurn = !playerOneTurn;

	console.log("turn" + iTurn);

})

skipButton.addEventListener("click", function() {

	if (!isClicked) {
		startTimer();
		isClicked = !isClicked;
	}

	p1Image.classList.toggle("isTurn");
	p2Image.classList.toggle("isTurn");
	playerOneTurn = !playerOneTurn;

})






function startTimer() {
    window.markDate = new Date();
    $(document).ready(function() {
        $("div.absent").toggleClass("present");
    });
    updateClock();
}

function updateClock() {  
    var currDate = new Date();
    var diff = currDate - markDate;
    document.getElementById("timer").innerHTML = format(diff/1000);
    setTimeout(function() {updateClock()}, 1000);
}

function format(seconds)
{
var numhours = parseInt(Math.floor(((seconds % 31536000) % 86400) / 3600),10);
var numminutes = parseInt(Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),10);
var numseconds = parseInt((((seconds % 31536000) % 86400) % 3600) % 60,10);
    return ((numhours<10) ? "0" + numhours : numhours)
    + ":" + ((numminutes<10) ? "0" + numminutes : numminutes)
    + ":" + ((numseconds<10) ? "0" + numseconds : numseconds);
}