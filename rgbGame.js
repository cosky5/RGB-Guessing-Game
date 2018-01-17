var numberOfCircles = 6;
var colors = generateRandomColors(numberOfCircles);


var circles = document.querySelectorAll(".circle");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var textDisplay = document.querySelector("#text");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");


easyButton.addEventListener("click", function(){
	hardButton.classList.remove("select");
	easyButton.classList.add("select");
	numberOfCircles = 3;
	colors = generateRandomColors(numberOfCircles);
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < circles.length; i++){
		if (colors[i]) {
			circles[i].style.backgroundColor = colors[i];
		}else{
			circles[i].style.display = "none";
		}
	}
})

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("select");
	hardButton.classList.add("select");
	numberOfCircles = 6;
	colors = generateRandomColors(numberOfCircles);
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
		circles[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	//generate all new colours
	colors = generateRandomColors(numberOfCircles);

	//pick a new random colour from array
	pickedColor = pickColor();

	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colours"
	textDisplay.textContent = "";

	//change colors of circles
	for(var i = 0; i < circles.length; i++){
		circles[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";

})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < circles.length; i++){
	// add initial colors to circles
	circles[i].style.backgroundColor  = colors[i];

	//add click listeners to circles
	circles[i].addEventListener("click", function() {
		//grab color of clicked circles
		var clickedColor = this.style.backgroundColor ;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			textDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor  = clickedColor;
		} else {
			this.style.backgroundColor  = "#232323";
			textDisplay.textContent = "Almost there!";
		}
	});
}

function changeColors(color) {
	//loop through all circles
	for(var i = 0; i < circles.length; i++) {
		//change each color to match given color
		circles[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
