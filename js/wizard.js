let fValue = 0;
let link = 'link leer';

var question  = [];
question['question1'] = "Welcher Schlaftyp sind Sie?";
question['question2'] = "Welcher Schlaftyp sind Sie?2";
question['question3'] = "Welcher Schlaftyp sind Sie?3";

var pointSet = [
	1,
	5,
	10,
	1,
	5,
	10,
	1,
	5,
	10,
	1,
	5,
	10
];

var questionSet = [
	"Welcher Schlaftyp sind Sie?",
	"Welcher Schlaftyp sind Sie?2",
	"Welcher Schlaftyp sind Sie?3"
];

// let magicNumber = randomNumber();
// // window.onload = initialize();

// function rowNumber() {
// 	count = imageSet.length;
// 	if (count % 3 == 0) {
// 		console.log("TRUE");
// 		for (let index = 0; index < count; index+=3) {
// 			console.log(index);
			
// 		}
// 	} else {
// 		console.log("FALSE");
// 	}
// }

// // rowNumber();

// // imagePreloader();
// function randomNumber() {
// 	var imageNumber = Math.floor(Math.random() * imageSet.length);
// 	return imageNumber;
// }

// function pointFromPointSet(pointNumber) {
// 	return pointSet[pointNumber];
// }

// // Image Creation and Positioning
// function createImage(name, points) {
// 	img = document.createElement("img");
// 	img.src = "img/" + name + ".jpg";
// 	img.setAttribute("data-point", points);
// 	img.setAttribute("id", name);
// 	// img.setAttribute("onclick", "run(this.id)");

// 	return img;
// }

// function placeCaptionInPosition(element) {
// 	var position = document.getElementById("questionCaptions");
// 	position.appendChild(element);
// }

// function captionFromCaptionSet(captionNumber) {
// 	return captionSet[captionNumber];
// }

// function imageFromImageSet(imageNumber) {
// 	return imageSet[imageNumber];
// }







// new
function init() {
	document.getElementById("q100").style.display="block";
	document.getElementById("wizard").style.display="block";
	document.getElementById("end").style.display="none";
	fValue = 0;
	// console.log("eValue: " + eValue);
	console.log("fValue: " + fValue);
}

function objectIdentifier(objectID) {
	var el = document.getElementById(objectID);
	return el;
}

function getPoint(element) {
	var po = parseInt(element.dataset.point);
	return po;
}

function calculatePoints(number) {
	var eValue = fValue += number;
}

function run(objectID) {
	var number = getPoint(objectIdentifier(objectID));
	calculatePoints(number);
	checkQuestion();
	console.log("fValue: " + fValue);
	console.log("Link: " + link);
}

function checkQuestion() {
	switch (true) {
		case (fValue < 10):
			document.getElementById("q100").style.display="none";
			document.getElementById("q200").style.display="block";
			break;
		
		case (fValue < 30):
			document.getElementById("q200").style.display="none";
			document.getElementById("q300").style.display="block";
			break;

		case (fValue >= 41):
			document.getElementById("q300").style.display="none";
			document.getElementById("end").style.display="block";
			generateLink();
			break;
	}
}

function generateLink() {
	switch (fValue) {
		case 41:
		case 56:
			link = 'https://www.angela-bruderer.ch/de/top-angebote';
			break;

		case 73:
			link = 'https://www.angela-bruderer.ch/de/ausverkauf';
			break;
	}

	return link;
}

function getTargetLink()
{
	return link;
}