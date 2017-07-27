// console.log("main.js");


// ***** Function to check whether inputs are correct ***** //

function checkInputs() {

	theNum = document.getElementById("treeHeight").value;
	theChar = document.getElementById("treeChar").value;

	if (isNaN(theNum)) {

		alert("Please enter a number in the first box!");

	} else if (theNum && theChar ) {

		buildArray(theNum, theChar);

	} else {

		alert("Please enter both a number and a character!");
	}
}


// ***** Function to build array to hold input number and character ***** //

function buildArray(theNum, theChar) {

	let treeObject = {};

	treeObject.num = parseInt(theNum);
	treeObject.char = theChar;

	tree(treeObject); 
}


// ***** Function to build tree in console ***** //

function tree(input) {

	let numberSpacers = "";
	let spacerCounter = input.num;

	let numberChars = input.char;
	let charCounter = 0;

	let theString = "";

	for (var i = 0; i < input.num; i++) {
		
		numberSpacers = "";
		numberChars = input.char;

		spacerCounter -= 1;
		
		for (var j = 0; j < spacerCounter; j++) {
			numberSpacers += " ";
		}

		for (var k = 0; k < charCounter; k++) {
			numberChars += input.char + input.char;
		}
		
		charCounter += 1;

		theString = numberSpacers + numberChars + numberSpacers;

		console.log(theString);

	}
}


// ***** Add event listener to tree button on HTML page and trigger functions on click ***** //

document.getElementById("growTree").addEventListener("click", checkInputs);


// ***** Set up enter key to activate functions ***** //

document.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    checkInputs();
    event.preventDefault();
  }
});