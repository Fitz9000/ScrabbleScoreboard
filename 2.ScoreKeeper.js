console.log("Connected");

markPresent();

function markPresent() {
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

var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector(".testingInput");
var winningScoreDisplay = document.querySelectorAll("p span")[3];
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver) {
		p1Score ++;
		if(p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
})

p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score ++;
		if(p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
})

resetButton.addEventListener("click", function(){
		reset();
})

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p1Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}