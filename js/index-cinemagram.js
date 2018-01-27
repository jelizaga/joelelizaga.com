// I'm really proud of this tiny bit, right here. I'll develop this in time.
// Essentially, I choose a cinemagram depending on the time and season.
// In summer, you'll get summery cinemagrams.
// In winter, you'll get wintery cinemagrams.
// At night in summer, you'll get nocturnal cinemagrams during the summer.
// Etc.
// I created all of these cinemagrams myself.

$(document).ready(function() {

	var clock = new Date();
	var hour = clock.getHours();
	var month = clock.getMonth();


	if (month == 0) { // January
		if (hour > 8 && hour < 17) {

		} else {

		}
	}
	if (month == 1) { // February
		if (hour > 7 && hour < 18) {

		} else {

		}
	}
	if (month == 2) { // March
		if (hour > 7 && hour < 19) {

		} else {

		}
	}
	if (month == 3) { // April
		if (hour > 6 && hour < 20) {

		} else {

		}
	}
	if (month == 4) { // May
		if (hour > 6 && hour < 21) {

		} else {
		
		}
	}
	if (month == 5) { // June
		if (hour > 5 && hour < 21) {
		} else {
		}
	}
	if (month == 6) { // July
		if (hour > 5 && hour < 21) {

		} else {

		}
	}
	if (month == 7) { // August
		if (hour > 6 && hour < 20) {
		} else {
		}
	}
	if (month == 8) { // September
		if (hour > 7 && hour < 19) {
		} else {
		}
	}
	if (month == 9) { // November
		if (hour > 7 && hour < 18) {
		} else {
		}
	}
	if (month == 10) { // October
		if (hour > 7 && hour < 17) {
		} else {
		}
	}
	if (month == 11) { // December
		if (hour > 8 && hour < 16) {
		} else {
		}
	}


	// Initializing cinemagram.
	var cinemagramSelection = ["../img/cinemagram/uw-statue.mp4", "../img/cinemagram/uw-crow.mp4", "../img/cinemagram/uw-west-campus-1.mp4"];
	var cinemagramCode = Math.floor((Math.random() * cinemagramSelection.length));
	var cinemagram = cinemagramSelection[cinemagramCode];
	$("#cinemagram").attr("src", cinemagram);

	// Changing cinemagram on click.
	$("#cinemagram").click(function() {
		$("#cinemagram").addClass("bounceOutRight");
		if (cinemagramCode == cinemagramSelection.length - 1) {
			cinemagramCode = 0;
		} else {
			cinemagramCode++;
		}
		var cinemagram = cinemagramSelection[cinemagramCode];
		$("#cinemagram").attr("src", cinemagram);
	});

});