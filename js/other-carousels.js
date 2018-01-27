/*
	Admittedly, redundancy abound.
	Also, using the carousels makes the fans on my laptop roar like a Cessna.
	... But they look really cool, and that's your browser doing the heavy lifting, and not my
	server. I'm already putting load on my site by locally hosting my videos in two different
	formats.
	Speaking of which, you can run my site with JavaScript off. I've made a point of developing
	it so that it remains fully functional if you're using NoScript, though it may be a little
	less of a spectacle.
*/

$(document).ready(function() {

	///////////////////////////////////////////////////////////////////////////////////////////////
	// CVM CAROUSEL ///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var cvmCarousel;
	var cvmi = 1;

	$("#cvm-img").mouseover(function() {
		//$(".background-image").css("display", "block")
		cvmCarousel = setInterval(function() {
			switch(cvmi) {
				case 1:
					document.getElementById("cvm-img").src = "../img/other/cvm/cvm-1.png";
					$(".background-image").css("background-image", "url(../img/other/cvm/cvm-1.png")
					cvmi++;
					break;
				case 2:
					document.getElementById("cvm-img").src = "../img/other/cvm/cvm-2.png";
					$(".background-image").css("background-image", "url(../img/other/cvm/cvm-2.png")
					cvmi++;
					break;
				case 3:
					document.getElementById("cvm-img").src = "../img/other/cvm/cvm-3.png";
					$(".background-image").css("background-image", "url(../img/other/cvm/cvm-3.png")
					cvmi++;
					break;
				case 4:
					document.getElementById("cvm-img").src = "../img/other/cvm/cvm-4.png";
					$(".background-image").css("background-image", "url(../img/other/cvm/cvm-4.png")
					cvmi++;
					break;
				case 5:
					document.getElementById("cvm-img").src = "../img/other/cvm/cvm-5.png";
					$(".background-image").css("background-image", "url(../img/other/cvm/cvm-5.png")
					cvmi = 1;
					break;
			}
		}, 1000);
	});

	$("#cvm-img").mouseleave(function() {
		//$(".background-image").css("display", "none")
		clearInterval(cvmCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// TORVALDS CAROUSEL //////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var torvaldsCarousel;
	var torvaldsi = 1;

	$("#torvalds-img").mouseover(function() {
		torvaldsCarousel = setInterval(function() {
			switch(torvaldsi) {
				case 1:
					document.getElementById("torvalds-img").src = "../img/other/torvalds/torvalds-1.png";
					torvaldsi++;
					break;
				case 2:
					document.getElementById("torvalds-img").src = "../img/other/torvalds/torvalds-2.png";
					torvaldsi++;
					break;
				case 3:
					document.getElementById("torvalds-img").src = "../img/other/torvalds/torvalds-3.png";
					torvaldsi++;
					break;
				case 4:
					document.getElementById("torvalds-img").src = "../img/other/torvalds/torvalds-4.png";
					torvaldsi++;
					break;
				case 5:
					document.getElementById("torvalds-img").src = "../img/other/torvalds/torvalds-5.png";
					torvaldsi = 1;
					break;
			}
		}, 1000);
	});

	$("#torvalds-img").mouseleave(function() {
		clearInterval(torvaldsCarousel);
	});

});