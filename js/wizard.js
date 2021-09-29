let fValue = 0;
let link = 'link leer';

function init() {
	document.getElementById("q100").style.display="block";
	document.getElementById("wizard").style.display="block";
	document.getElementById("end").style.display="none";
	fValue = 0;
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