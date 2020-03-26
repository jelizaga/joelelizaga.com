// index.js ///////////////////////////////////////////////////////////////////////////////////////
// Handles general index functions.

$(document).ready(function() {

	$("#bio-nccc").hover(
		function() {
			$("#portrait > img").attr("src", "/img/portrait/chainsaw-2.jpg");
		}, function() {
			$("#portrait > img").attr("src", "/img/portrait/portrait.jpg");
		}
	);

	$("#bio-uw").hover(
		function() {
			$("#portrait > img").attr("src", "/img/portrait/uw.jpg");
		}, function() {
			$("#portrait > img").attr("src", "/img/portrait/portrait.jpg");
		}
	);

	$("#bio-infosys").hover(
		function() {
			$("#portrait > img").attr("src", "/img/portrait/infosys.jpg");
		}, function() {
			$("#portrait > img").attr("src", "/img/portrait/portrait.jpg");
		}
	);

});