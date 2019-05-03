// Speed of typing into the terminal.
var typingSpeed = 50;

function terminalType() {
	// Type out the first line.
	setTimeout(terminalTypeAnimation, 800, "#displayCmdTxt", "display --loop bg.mp4", "", 0);
	// Print the output and next prompt.
	setTimeout(printLine, 2200, "#doneLine");
	setTimeout(removeCursor, 2200, "#displayCmdTxt");
	setTimeout(displayCinemagraph, 2200);
	setTimeout(printLine, 2200, "#enjoyLine");
	// Type the "enjoy your day" line.
	setTimeout(terminalTypeAnimation, 3300, "#enjoyTxt", "Enjoy your day.", "", 0);
	setTimeout(printLine, 5000, "#notFoundLine");
	setTimeout(removeCursor, 5000, "#enjoyTxt");
	setTimeout(printLine, 5000, "#bizCardLine");
	setTimeout(terminalTypeAnimation, 6000, "#bizCardTxt", "./intro.sh", "", 0)
	setTimeout(swapTerminalWithCard, 8000);
}

// Displays a terminal line (turns 'display' from 'none' to 'block').
function printLine(revealID) {
	$(revealID).css("display", "block");
}

// Simulates the input into a terminal.
// id - String representing the id of the element to type into.
// txt - String representing the text to type out.
// str - The "beginning" of the input; typically an empty string, "".
// c - Index of the character from txt to begin typing from. Typically '0.'
function terminalTypeAnimation(id, txt, str, c) {
	if (c < txt.length) {
		str = str + txt.charAt(c);
		$(id).html(str + "&block;");
		c++;
		setTimeout(terminalTypeAnimation, typingSpeed, id, txt, str, c);
	}
}

// Receives the ID of a span element, chops off the last char in its string.
function removeCursor(id) {
	var str = $(id).text();
	str = str.slice(0, -1);
	$(id).html(str);
}

// Animates the cinemagraph fade-in.
function displayCinemagraph() {
	$("#cinemagram").animate({
		opacity: 1
	}, 300, function() {
	});
}

// Preloads the random cinemagraph for optimal presentation.
function loadCinemagraph() {
	var cinemagraphSelection = ["../img/cinemagram/uw-crow.mp4", "img/cinemagram/origami-1.mp4", "img/cinemagram/origami-2.mp4", "img/cinemagram/origami-3.mp4"];
	var cinemagraphCode = Math.floor((Math.random() * cinemagraphSelection.length));
	var cinemagraph = cinemagraphSelection[cinemagraphCode];
	$("#cinemagram").attr("src", cinemagraph); 
}

// Closes the terminal. Displays the business card.
function swapTerminalWithCard() {
	$("#terminal").css("display", "none");
	// Display and fade in the index-head.
	$("#multimedia-title").css("transform", "translate(0px, 100vh)");
	$("#hci-title").css("opacity", "0");
	$("#hci-title").css("display", "block");
	$("#hci-title").animate({
		opacity: 1
	}, 1000, function() {
	});
	// Wait a bit, swing HCI title up, remove it.
	setTimeout(function() {
		$("#hci-title").css("transform", "translate(0px, -100vh)");
	}, 4000);
	setTimeout(function() {
		$("#hci-title").css("display", "none");
	}, 4500);
	// Display multimedia title, swing up, remove it.
	setTimeout(function() {
		$("#multimedia-title").css("display", "block");
	}, 4500);
	setTimeout(function() {
		$("#multimedia-title").css("transform", "translate(0px, 0px");
	}, 5000);
	setTimeout(function() {
		$("#multimedia-title").css("transform", "translate(0px, -100vh");
	}, 9000);
	setTimeout(function() {
		$("#multimedia-title").css("display", "none");
		$("#index-animation").css("display", "none");
		$("#index").css("display", "block");
	}, 9500);
	setTimeout(function() {
		$("#index").css("transform", "translate(0px)");
	}, 10000)
}

///////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
	// Hide index, display index animation.
	$("#index").css("display", "none");
	$("#index").css("transform", "translate(-101vw)");
	$("#index-animation").css("display", "flex");
	// Load the random cinemagraph.
	loadCinemagraph();
	// Check if the visitor has already been here before. If they have, display the index
	// immediately.
	if (document.cookie.indexOf("visited") >= 0) {
		console.log("Welcome back.");
	// If not, run the index animation and dump the 'visited' cookie in their cache.
	} else {
    	console.log("This is your first time here, isn't it?");
    	document.cookie = "visited";
	}
	// Cinemagram is transparent. Terminal lines are hidden.
	$("#cinemagram").css("opacity", "0");
	$("#doneLine").css("display", "none");
	$("#enjoyLine").css("display", "none");
	$("#notFoundLine").css("display", "none");
	$("#bizCardLine").css("display", "none");
	terminalType();
});