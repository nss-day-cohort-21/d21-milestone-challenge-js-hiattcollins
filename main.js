console.log("main.js");

// 

// treeObject.num = document.getElementById("treeHeight").value;
// treeObject.char = document.getElementById("treeChar").value;

// console.log("treeObject.num", treeObject.num);
// console.log("treeObject.char", treeObject.char);

function checkInputs() {

	theNum = document.getElementById("treeHeight").value;
	theChar = document.getElementById("treeChar").value;

	console.log("theNum:", theNum, "theChar:", theChar);

	if (isNaN(theNum)) {

		alert("Please enter a number in the first box!");

	} else if (theNum && theChar ) {

	// console.log("Nothing is in treeObject.num", treeObject.num);
	// alert("Please enter both a number and a character!");
	// alert("theNum and theChar both had a character");

		buildArray(theNum, theChar);

	} else {

		alert("Please enter both a number and a character!");
	}
}

function buildArray(theNum, theChar) {

	let treeObject = {};

// treeObject.num = parseInt(document.getElementById("treeHeight").value);
// treeObject.char = document.getElementById("treeChar").value;

	treeObject.num = parseInt(theNum);
	treeObject.char = theChar;


	console.log("treeObject.num", treeObject.num);
	console.log("treeObject.char", treeObject.char);
	console.log("treeObject", treeObject);

	console.log(4 + treeObject.num);

// if (treeObject.num) {
// 	console.log("treeObject.num has a value:", treeObject.num);
// } else {
// console.log("treeObject.num has no value:", treeObject.num);
// // }

// if (treeObject.num || treeObject.char) {
// 	console.log("either treeObject.num or treeObject.char has a value");
// 	console.log("treeObject.num", treeObject.num);
// 	console.log("treeObject.char", treeObject.char);
// } else {
// 	console.log("either treeObject.num or treeObject.char has NO value");
// 	console.log("treeObject.num", treeObject.num);
// 	console.log("treeObject.char", treeObject.char);
// }

// event.preventDefault();

tree(treeObject); 




}


function tree(input) {
	console.log("input.num", input.num);
	console.log("input.char", input.char);
	console.log("input", input);

	console.log(4 + input.num);

	let numberSpacers = "";
	let spacerCounter = input.num;

	let numberStars = input.char;
	let starCounter = 0;

	let theString = "";

	for (var i = 0; i < input.num; i++) {
		
		numberSpacers = "";
		numberStars = input.char;

		spacerCounter -= 1;
		
		for (var j = 0; j < spacerCounter; j++) {
			numberSpacers += " ";
		}

		for (var k = 0; k < starCounter; k++) {
			numberStars += input.char + input.char;
		}
		
		starCounter += 1;

		theString = numberSpacers + numberStars + numberSpacers;

		console.log(theString);
				// console.log("numberSpacers", numberSpacers);
		
			

		// theString = numberSpacers + input.char + numberSpacers;

		// console.log("theString", theString);
		// console.log(theString);
	}

	// event.preventDefault();	
}


// ***** Add event listener to tree button on HTML page and trigger tree grow on click ***** //
// document.getElementById("growTree").addEventListener("click", buildArray);

document.getElementById("growTree").addEventListener("click", checkInputs);


// ***** Set up enter key to activate tree grow function ***** //
document.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    checkInputs();
    event.preventDefault();
  }
});