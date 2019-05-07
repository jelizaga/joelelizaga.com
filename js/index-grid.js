// index-grid.js //////////////////////////////////////////////////////////////////////////////////
// Handles the index grid and its perpetual scrolling effect.

var gridSpeed = 5000;

// grindRoll
// Animates the scrolling of .projects <div> for infinity.
// loopCount - Current count of the animation; begin with 0.
// gridID - ID of the .projects <div> to animate.
// gridLength - Amount of projects stored in the corresponding array.
function gridRoll(loopCount, gridID, gridLength) {
	// Once we've entered the first index of the swap, perform the swap.
	if (loopCount == gridLength + 1) {
		$("#" + gridID + " > .projects").css("transition-duration", "0s");
		$("#" + gridID + " > .projects").css("transform", "translate(0)");
		setTimeout(function() {
			gridRoll(0, gridID, gridLength);
		}, gridSpeed);
	// Else, translate the row to the left a bit.
	} else {
		$("#" + gridID + " > .projects").css("transition-duration", "1s");
		var movement = loopCount * 25;
		movement = 0 - movement;
		$("#" + gridID + " > .projects").css("transform", "translate(" + movement + "%)");
		loopCount = loopCount + 1;
		if (loopCount == 1) {
			setTimeout(function() {
				gridRoll(loopCount, gridID, gridLength);
			}, 0);
		} else {
			setTimeout(function() {
				gridRoll(loopCount, gridID, gridLength);
			}, gridSpeed);
		}
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function() {

	// Dump all hidden project HTML elements into corresponding arrays.
	var webProjects = $(".web-project");
	var webProjectsSwap = $(".web-project-swap");

	var mobProjects = $(".mobile-project");

	var desProjects = $(".design-project");
	var desProjectsSwap = $(".design-project-swap");

	var vidProjects = $(".video-project");
	var vidProjectsSwap = $(".video-project-swap");

	// Inject arrayed projects into the project grid.
	for (var project = 0; project < webProjects.length; project++) {
		$("#web-projects > .projects").append(webProjects[project]);
	}
	for (var project = 0; project < webProjectsSwap.length; project++) {
		$("#web-projects > .projects").append(webProjectsSwap[project]);
	}

	for (var project = 0; project < mobProjects.length; project++) {
		$("#mobile-projects > .projects").append(mobProjects[project]);
	}

	for (var project = 0; project < desProjects.length; project++) {
		$("#design-projects > .projects").append(desProjects[project]);
	}
	for (var project = 0; project < desProjectsSwap.length; project++) {
		$("#design-projects > .projects").append(desProjectsSwap[project]);
	}

	for (var project = 0; project < vidProjects.length; project++) {
		$("#video-projects > .projects").append(vidProjects[project]);
	}
	for (var project = 0; project < vidProjectsSwap.length; project++) {
		$("#video-projects > .projects").append(vidProjectsSwap[project]);
	}

	gridRoll(0, "web-projects", webProjects.length);
	gridRoll(0, "design-projects", desProjects.length);
	gridRoll(0, "video-projects", vidProjects.length);

})