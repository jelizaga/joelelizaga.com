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
	// GENONE CAROUSEL ////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var gen1Carousel;
	var gen1i = 1;

	$("#nccc-gen-one-img").mouseover(function() {
		gen1Carousel = setInterval(function() {
			switch(gen1i) {
				case 1:
					document.getElementById("nccc-gen-one-img").src = "../img/vid/nccc-gen-one/nccc-gen-one-1.jpg";
					gen1i++;
					break;
				case 2:
					document.getElementById("nccc-gen-one-img").src = "../img/vid/nccc-gen-one/nccc-gen-one-2.jpg";
					gen1i++;
					break;
				case 3:
					document.getElementById("nccc-gen-one-img").src = "../img/vid/nccc-gen-one/nccc-gen-one-3.jpg";
					gen1i++;
					break;
				case 4:
					document.getElementById("nccc-gen-one-img").src = "../img/vid/nccc-gen-one/nccc-gen-one-4.jpg";
					gen1i++;
					break;
				case 5:
					document.getElementById("nccc-gen-one-img").src = "../img/vid/nccc-gen-one/nccc-gen-one-5.jpg";
					gen1i = 1;
					break;
			}
		}, 1000);
	});

	$("#nccc-gen-one-img").mouseleave(function() {
		clearInterval(gen1Carousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// SDMB CAROUSEL //////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var sdmbCarousel;
	var sdmbi = 1;

	$("#nccc-sdmb-img").mouseover(function() {
		sdmbCarousel = setInterval(function() {
			switch(sdmbi) {
				case 1:
					document.getElementById("nccc-sdmb-img").src = "../img/vid/nccc-sdmb/nccc-sdmb-1.jpg";
					sdmbi++;
					break;
				case 2:
					document.getElementById("nccc-sdmb-img").src = "../img/vid/nccc-sdmb/nccc-sdmb-2.jpg";
					sdmbi++;
					break;
				case 3:
					document.getElementById("nccc-sdmb-img").src = "../img/vid/nccc-sdmb/nccc-sdmb-3.jpg";
					sdmbi++;
					break;
				case 4:
					document.getElementById("nccc-sdmb-img").src = "../img/vid/nccc-sdmb/nccc-sdmb-4.jpg";
					sdmbi++;
					break;
				case 5:
					document.getElementById("nccc-sdmb-img").src = "../img/vid/nccc-sdmb/nccc-sdmb-5.jpg";
					sdmbi++;
					break;
				case 6:
					document.getElementById("nccc-sdmb-img").src = "../img/vid/nccc-sdmb/nccc-sdmb-6.jpg";
					sdmbi++;
					break;
				case 7:
					document.getElementById("nccc-sdmb-img").src = "../img/vid/nccc-sdmb/nccc-sdmb-7.jpg";
					sdmbi = 1;
					break;
			}
		}, 1000);
	});

	$("#nccc-sdmb-img").mouseleave(function() {
		clearInterval(sdmbCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// TELLTOO CAROUSEL ///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var ttCarousel;
	var tti = 1;

	$("#tt-img").mouseover(function() {
		ttCarousel = setInterval(function() {
			switch(tti) {
				case 1:
					document.getElementById("tt-img").src = "../img/vid/tt/tt-1.jpg";
					tti++;
					break;
				case 2:
					document.getElementById("tt-img").src = "../img/vid/tt/tt-2.jpg";
					tti++;
					break;
				case 3:
					document.getElementById("tt-img").src = "../img/vid/tt/tt-3.jpg";
					tti++;
					break;
				case 4:
					document.getElementById("tt-img").src = "../img/vid/tt/tt-4.jpg";
					tti = 1;
					break;
			}
		}, 1000);
	});

	$("#tt-img").mouseleave(function() {
		clearInterval(ttCarousel);
	});


	///////////////////////////////////////////////////////////////////////////////////////////////
	// MOMENTO CAROUSEL ///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var momentoCarousel;
	var momentoi = 1;

	$("#momento-img").mouseover(function() {
		momentoCarousel = setInterval(function() {
			switch(momentoi) {
				case 1:
					document.getElementById("momento-img").src = "../img/vid/momento/momento-1.jpg";
					momentoi++;
					break;
				case 2:
					document.getElementById("momento-img").src = "../img/vid/momento/momento-2.jpg";
					momentoi++;
					break;
				case 3:
					document.getElementById("momento-img").src = "../img/vid/momento/momento-3.jpg";
					momentoi++;
					break;
				case 4:
					document.getElementById("momento-img").src = "../img/vid/momento/momento-4.jpg";
					momentoi++;
					break;
				case 5:
					document.getElementById("momento-img").src = "../img/vid/momento/momento-5.jpg";
					momentoi = 1;
					break;
			}
		}, 1000);
	});

	$("#momento-img").mouseleave(function() {
		clearInterval(momentoCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// AD-AD CAROUSEL /////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var adAdCarousel;
	var adAdi = 1;

	$("#ad-ad-img").mouseover(function() {
		adAdCarousel = setInterval(function() {
			switch(adAdi) {
				case 1:
					document.getElementById("ad-ad-img").src = "../img/vid/ad-ad/ad-ad-1.jpg";
					adAdi++;
					break;
				case 2:
					document.getElementById("ad-ad-img").src = "../img/vid/ad-ad/ad-ad-2.jpg";
					adAdi++;
					break;
				case 3:
					document.getElementById("ad-ad-img").src = "../img/vid/ad-ad/ad-ad-3.jpg";
					adAdi++;
					break;
				case 4:
					document.getElementById("ad-ad-img").src = "../img/vid/ad-ad/ad-ad-4.jpg";
					adAdi++;
					break;
				case 5:
					document.getElementById("ad-ad-img").src = "../img/vid/ad-ad/ad-ad-5.jpg";
					adAdi = 1;
					break;
			}
		}, 1000);
	});

	$("#ad-ad-img").mouseleave(function() {
		clearInterval(adAdCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// AD-AB CAROUSEL /////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var adAbCarousel;
	var adAbi = 3;

	$("#ad-ab-img").mouseover(function() {
		adAbCarousel = setInterval(function() {
			switch(adAbi) {
				case 1:
					document.getElementById("ad-ab-img").src = "../img/vid/ad-ab/ad-ab-1.jpg";
					adAbi++;
					break;
				case 2:
					document.getElementById("ad-ab-img").src = "../img/vid/ad-ab/ad-ab-2.jpg";
					adAbi++;
					break;
				case 3:
					document.getElementById("ad-ab-img").src = "../img/vid/ad-ab/ad-ab-3.jpg";
					adAbi++;
					break;
				case 4:
					document.getElementById("ad-ab-img").src = "../img/vid/ad-ab/ad-ab-4.jpg";
					adAbi = 1;
					break;
			}
		}, 1000);
	});

	$("#ad-ab-img").mouseleave(function() {
		clearInterval(adAbCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// AD-T CAROUSEL //////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var adTCarousel;
	var adTi = 2;

	$("#ad-t-img").mouseover(function() {
		adTCarousel = setInterval(function() {
			switch(adTi) {
				case 1:
					document.getElementById("ad-t-img").src = "../img/vid/ad-t/ad-t-1.jpg";
					adTi++;
					break;
				case 2:
					document.getElementById("ad-t-img").src = "../img/vid/ad-t/ad-t-2.jpg";
					adTi++;
					break;
				case 3:
					document.getElementById("ad-t-img").src = "../img/vid/ad-t/ad-t-3.jpg";
					adTi++;
					break;
				case 4:
					document.getElementById("ad-t-img").src = "../img/vid/ad-t/ad-t-4.jpg";
					adTi++;
					break;
				case 5:
					document.getElementById("ad-t-img").src = "../img/vid/ad-t/ad-t-5.jpg";
					adTi = 1;
					break;
			}
		}, 1000);
	});

	$("#ad-t-img").mouseleave(function() {
		clearInterval(adTCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// AD-C CAROUSEL //////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var adCCarousel;
	var adCi = 1;

	$("#ad-c-img").mouseover(function() {
		adCCarousel = setInterval(function() {
			switch(adCi) {
				case 1:
					document.getElementById("ad-c-img").src = "../img/vid/ad-c/ad-c-1.jpg";
					adCi++;
					break;
				case 2:
					document.getElementById("ad-c-img").src = "../img/vid/ad-c/ad-c-2.jpg";
					adCi++;
					break;
				case 3:
					document.getElementById("ad-c-img").src = "../img/vid/ad-c/ad-c-3.jpg";
					adCi++;
					break;
				case 4:
					document.getElementById("ad-c-img").src = "../img/vid/ad-c/ad-c-4.jpg";
					adCi++;
					break;
				case 5:
					document.getElementById("ad-c-img").src = "../img/vid/ad-c/ad-c-5.jpg";
					adCi = 1;
					break;
			}
		}, 1000);
	});

	$("#ad-c-img").mouseleave(function() {
		clearInterval(adCCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// INFO-470 CAROUSEL //////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var info470Carousel;
	var info470i = 2;

	$("#info-470-img").mouseover(function() {
		info470Carousel = setInterval(function() {
			switch(info470i) {
				case 1:
					document.getElementById("info-470-img").src = "../img/vid/info-470/info-470-1.jpg";
					info470i++;
					break;
				case 2:
					document.getElementById("info-470-img").src = "../img/vid/info-470/info-470-2.jpg";
					info470i++;
					break;
				case 3:
					document.getElementById("info-470-img").src = "../img/vid/info-470/info-470-3.jpg";
					info470i++;
					break;
				case 4:
					document.getElementById("info-470-img").src = "../img/vid/info-470/info-470-4.jpg";
					info470i++;
					break;
				case 5:
					document.getElementById("info-470-img").src = "../img/vid/info-470/info-470-5.jpg";
					info470i = 1;
					break;
			}
		}, 1000);
	});

	$("#info-470-img").mouseleave(function() {
		clearInterval(info470Carousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// THEO CAROUSEL //////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var theoCarousel;
	var theoi = 2;

	$("#theo-img").mouseover(function() {
		theoCarousel = setInterval(function() {
			switch(theoi) {
				case 1:
					document.getElementById("theo-img").src = "../img/vid/theo/theo-1.jpg";
					theoi++;
					break;
				case 2:
					document.getElementById("theo-img").src = "../img/vid/theo/theo-2.jpg";
					theoi++;
					break;
				case 3:
					document.getElementById("theo-img").src = "../img/vid/theo/theo-3.jpg";
					theoi = 1;
					break;
			}
		}, 1000);
	});

	$("#theo-img").mouseleave(function() {
		clearInterval(theoCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// TBM CAROUSEL ///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var tbmCarousel;
	var tbmi = 7;

	$("#tbm-img").mouseover(function() {
		tbmCarousel = setInterval(function() {
			switch(tbmi) {
				case 1:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-1.jpg";
					tbmi++;
					break;
				case 2:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-2.jpg";
					tbmi++;
					break;
				case 3:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-3.jpg";
					tbmi++;
					break;
				case 4:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-4.jpg";
					tbmi++;
					break;
				case 5:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-5.jpg";
					tbmi++;
					break;
				case 6:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-6.jpg";
					tbmi++;
					break;
				case 7:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-7.jpg";
					tbmi++;
					break;
				case 8:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-8.jpg";
					tbmi++;
					break;
				case 9:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-9.jpg";
					tbmi++;
					break;
				case 10:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-10.jpg";
					tbmi++;
					break;
				case 11:
					document.getElementById("tbm-img").src = "../img/vid/tbm/tbm-11.jpg";
					tbmi = 1;
					break;
			}
		}, 1000);
	});

	$("#tbm-img").mouseleave(function() {
		clearInterval(tbmCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// TP CAROUSEL ////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var tpCarousel;
	var tpi = 2;

	$("#tp-img").mouseover(function() {
		tpCarousel = setInterval(function() {
			switch(tpi) {
				case 1:
					document.getElementById("tp-img").src = "../img/vid/tp/tp-1.jpg";
					tpi++;
					break;
				case 2:
					document.getElementById("tp-img").src = "../img/vid/tp/tp-2.jpg";
					tpi++;
					break;
				case 3:
					document.getElementById("tp-img").src = "../img/vid/tp/tp-3.jpg";
					tpi++;
					break;
				case 4:
					document.getElementById("tp-img").src = "../img/vid/tp/tp-4.jpg";
					tpi++;
					break;
				case 5:
					document.getElementById("tp-img").src = "../img/vid/tp/tp-5.jpg";
					tpi++;
					break;
				case 6:
					document.getElementById("tp-img").src = "../img/vid/tp/tp-6.jpg";
					tpi++;
					break;
				case 7:
					document.getElementById("tp-img").src = "../img/vid/tp/tp-7.jpg";
					tpi++;
					break;
				case 8:
					document.getElementById("tp-img").src = "../img/vid/tp/tp-8.jpg";
					tpi = 1;
					break;
			}
		}, 1000);
	});

	$("#tp-img").mouseleave(function() {
		clearInterval(tpCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// CNY CAROUSEL ///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var cnyCarousel;
	var cnyi = 2;

	$("#cny-img").mouseover(function() {
		cnyCarousel = setInterval(function() {
			switch(cnyi) {
				case 1:
					document.getElementById("cny-img").src = "../img/vid/cny/cny-1.jpg";
					cnyi++;
					break;
				case 2:
					document.getElementById("cny-img").src = "../img/vid/cny/cny-2.jpg";
					cnyi++;
					break;
				case 3:
					document.getElementById("cny-img").src = "../img/vid/cny/cny-3.jpg";
					cnyi++;
					break;
				case 4:
					document.getElementById("cny-img").src = "../img/vid/cny/cny-4.jpg";
					cnyi = 1;
					break;
			}
		}, 1000);
	});

	$("#cny-img").mouseleave(function() {
		clearInterval(cnyCarousel);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// HIPPO CAROUSEL /////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var hippoCarousel;
	var hippoi = 2;

	$("#hippo-img").mouseover(function() {
		hippoCarousel = setInterval(function() {
			switch(hippoi) {
				case 1:
					document.getElementById("hippo-img").src = "../img/vid/hippo/hippo-1.jpg";
					hippoi++;
					break;
				case 2:
					document.getElementById("hippo-img").src = "../img/vid/hippo/hippo-2.jpg";
					hippoi++;
					break;
				case 3:
					document.getElementById("hippo-img").src = "../img/vid/hippo/hippo-3.jpg";
					hippoi++;
					break;
				case 4:
					document.getElementById("hippo-img").src = "../img/vid/hippo/hippo-4.jpg";
					hippoi++;
					break;
				case 5:
					document.getElementById("hippo-img").src = "../img/vid/hippo/hippo-5.jpg";
					hippoi = 1;
					break;
			}
		}, 1000);
	});

	$("#hippo-img").mouseleave(function() {
		clearInterval(hippoCarousel);
	});

});