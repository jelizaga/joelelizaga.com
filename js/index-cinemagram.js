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

	// Initializing cinemagram.
	/*
	var cinemagramSelection = ["../img/cinemagram/uw-crow.mp4", "../img/cinemagram/uw-west-campus-1.mp4", "img/cinemagram/origami-1.mp4", "img/cinemagram/origami-2.mp4", "img/cinemagram/origami-3.mp4"];
	var cinemagramCode = Math.floor((Math.random() * cinemagramSelection.length));
	var cinemagram = cinemagramSelection[cinemagramCode];
	$("#cinemagram").attr("src", cinemagram);

	// Changing cinemagram on click.
	$("#cinemagram").click(function() {
		//$("#cinemagram").addClass("bounceOutRight");
		if (cinemagramCode == cinemagramSelection.length - 1) {
			cinemagramCode = 0;
		} else {
			cinemagramCode++;
		}
		var cinemagram = cinemagramSelection[cinemagramCode];
		$("#cinemagram").attr("src", cinemagram);
	});
	*/

});