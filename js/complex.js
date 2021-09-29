let fValue = 1;

var imageSet = [
	"Bild1",
	"Bild2",
	"Bild3",
	"Bild4",
	"Bild5",
	"Bild6",
	"Bild7",
	"Bild8",
	"Bild9",
	"Bild10",
	"Bild11",
	"DasBildmitLangemNamen047465",
];

var captionSet = [
	"Fig.1 - Blume.",
	"Fig.2 - Trulli, Puglia, Italy. Fig.2 - Trulli, Puglia, Italy.",
	"Fig.3 - Orange Utan",
	"Fig.4",
	"Fig.5",
	"Fig.6",
	"Fig.7",
	"Fig.8",
	"Fig.9",
	"Fig.10",
	"Fig.11",
	"Fig.12"
];

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
	"Welcher Schlaftyp sind Sie?3",
	"Welcher Schlaftyp sind Sie?3",
	"Welcher Schlaftyp sind Sie?3",
	"Welcher Schlaftyp sind Sie?3",
	"Welcher Schlaftyp sind Sie?3",
	"Welcher Schlaftyp sind Sie?3",
	"Welcher Schlaftyp sind Sie?3",
	"Welcher Schlaftyp sind Sie?3",
	"Welcher Schlaftyp sind Sie?3",
];

let magicNumber = randomNumber();
// window.onload = initialize();

function imagePreloader() {
	// for (var j=imageSet.length; j--;) {
	// 	var img = new Image();
	// 	img.src = "img/" + imageSet[j] + ".jpg";
	// }
	i = 0;
	count = imageSet.length;
	if (count % 3 == 0) {
		console.log(i);
		for (let index = 0; index < count; index+=4) {
			document.getElementById('start').addEventListener('click', function() {
				placeImageInPosition(
					createImage(
						imageFromImageSet(
							i
						),
						pointFromPointSet(
							i
						)
					)
				);
				placeCaptionInPosition(
					createCaption(
						captionFromCaptionSet(
							i
						))
				);
				i++;
				// this.src = "img/" + imageSet[index >= imageSet.length - 1 ? i = 0 : ++i] + ".jpg";
			});
		}
	} else {

	}

	
}

function rowNumber() {
	count = imageSet.length;
	if (count % 3 == 0) {
		console.log("TRUE");
		for (let index = 0; index < count; index+=3) {
			console.log(index);
			
		}
	} else {
		console.log("FALSE");
	}
}

// rowNumber();
document.getElementById('start').onclick = doit();
function doit() {
	imagePreloader();
}

function initialize() {
	fo
	placeImageInPosition(
		createImage(
			imageFromImageSet(
				magicNumber
				), pointFromPointSet(
					magicNumber
					)
					)
					);

	placeCaptionInPosition(
		createCaption(
			captionFromCaptionSet(
				magicNumber
			))
	);
}
// imagePreloader();
function randomNumber() {
	var imageNumber = Math.floor(Math.random() * imageSet.length);
	return imageNumber;
}

function pointFromPointSet(pointNumber) {
	return pointSet[pointNumber];
}

// Image Creation and Positioning
function createImage(name, points) {
	img = document.createElement("img");
	img.src = "img/" + name + ".jpg";
	img.setAttribute("data-point", points);
	img.setAttribute("id", "myButton");
	// img.setAttribute("onclick", "run(this.id)");

	return img;
}

function placeImageInPosition(element) {
	var position = document.getElementById("questionImages");
	position.appendChild(element);
}

function createCaption(text) {
	caption = document.createElement("figcaption");
	caption.innerHTML = text;

	return caption;
}

function placeCaptionInPosition(element) {
	var position = document.getElementById("questionImages");
	position.appendChild(element);
}

function captionFromCaptionSet(captionNumber) {
	return captionSet[captionNumber];
}

function imageFromImageSet(imageNumber) {
	return imageSet[imageNumber];
}

function imageIdentifier(imageID) {
	var el = document.getElementById(imageID);
	return el;
}

function getPoint(element) {
	var po = parseInt(element.dataset.point);
	return po;
}

function calculatePoints(number) {
	var eValue = fValue += number;
	console.log(eValue);
}

function run(imageID) {
	var number = getPoint(imageIdentifier(imageID));
	calculatePoints(number);
}