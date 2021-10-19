let fValue = 0;
let link = 'link leer';
var results = [];

function init() {
	document.getElementById("q100").style.display="block";
	document.getElementById("wizard").style.display="block";
	document.getElementById("end").style.display="none";
	removeResultListElements();
	fValue = 0;
	results = [];
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
	getSelectedValues(document.getElementById(objectID).innerHTML);
	checkQuestion();
	console.log("fValue: " + fValue);
	console.log("results: " + results);
	// console.log("Link: " + link);
	// console.log("Client has clicked: " + document.getElementById(objectID).innerHTML);
}

function getSelectedValues(item) {
	results.push(item);
}

function returnResultListElements() {
	var parent = document.getElementById("resultList");

	//Create li with the results and append it with attributes to the parent
	for (var i = 0; i < results.length; i++) {
		var resultItem = document.createElement("li");
		resultItem.setAttribute("class", "resultItem");
		resultItem.innerHTML = results[i];
		parent.appendChild(resultItem);
	}
}

function removeResultListElements()
{
	var parent = document.getElementById("resultList");
	while (parent.firstChild) {
		parent.removeChild(parent.lastChild);
	}
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

		case (fValue < 243):
			document.getElementById("q300").style.display="none";
			document.getElementById("q400").style.display="block";
			break;

		case (fValue >= 284):
			document.getElementById("q100").style.display="none";
			document.getElementById("q200").style.display="none";
			document.getElementById("q300").style.display="none";
			document.getElementById("q400").style.display="none";
			document.getElementById("end").style.display="block";
			returnResultListElements();
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

	insertLink(link);
}

function insertLink(link)
{
	document.getElementById("targetLink").setAttribute("href", link);
}