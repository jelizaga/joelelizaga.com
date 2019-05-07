// index.js ///////////////////////////////////////////////////////////////////////////////////////
// Handles general index functions.

$(document).ready(function() {

	$("#bio-nccc").hover(
		function() {
			$("#portrait > img").attr("src", "/img/portrait/grass.jpg");
		}, function() {
			$("#portrait > img").attr("src", "/img/portrait/portrait.jpg");
		}
	);

});