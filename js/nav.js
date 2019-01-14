/*
	There's a ton of redundancy here.
	I mean, I could probably dump all these canvases in an array and iterate over them just fine.
	I don't have that much time on my hands, though, and chances are nobody's gonna be looking
	at this anyway. I'll probably clean this up later.
	"Later."
	I bet everybody says that.
	This was fun to write.
*/

$(document).ready(function() {

	///////////////////////////////////////////////////////////////////////////////////////////////
	// NAV INITIALIZATION /////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	var homec = document.getElementById("homec");
	var homectx = homec.getContext("2d");
	var homeimg = document.createElement("img");
	homeimg.src = "../img/nav/home-inactive.png";
	var homeimga = document.createElement("img");
	homeimga.src = "../img/nav/home-active.png";
	var homeframe = 1;
	var fadeinHome;
	var fadeoutHome;

	var resumec = document.getElementById("resumec");
	var resumectx = resumec.getContext("2d");
	var resumeimg = document.createElement("img");
	resumeimg.src = "../img/nav/resume-inactive.png";
	var resumeimga = document.createElement("img");
	resumeimga.src = "../img/nav/resume-active.png";
	var resumeframe = 1;
	var fadeinResume;
	var fadeoutResume;

	var webc = document.getElementById("webc");
	var webctx = webc.getContext("2d");
	var webimg = document.createElement("img");
	webimg.src = "../img/nav/web-inactive.png";
	var webimga = document.createElement("img");
	webimga.src = "../img/nav/web-active.png";
	var webframe = 1;
	var fadeinWeb;
	var fadeoutWeb;

	var mobile = document.getElementById("mobilec");
	var mobilectx = mobilec.getContext("2d");
	var mobileimg = document.createElement("img");
	mobileimg.src = "../img/nav/mobile-inactive.png";
	var mobileimga = document.createElement("img");
	mobileimga.src = "../img/nav/mobile-active.png";
	var mobileframe = 1;
	var fadeinMobile;
	var fadeoutMobile;

	var moviesc = document.getElementById("moviesc");
	var moviesctx = moviesc.getContext("2d");
	var moviesimg = document.createElement("img");
	moviesimg.src = "../img/nav/movies-inactive.png";
	var moviesimga = document.createElement("img");
	moviesimga.src = "../img/nav/movies-active.png";
	var moviesframe = 1;
	var fadeinMovies;
	var fadeoutMovies;

	var otherc = document.getElementById("otherc");
	var otherctx = otherc.getContext("2d");
	var otherimg = document.createElement("img");
	otherimg.src = "../img/nav/other-inactive.png";
	var otherimga = document.createElement("img");
	otherimga.src = "../img/nav/other-active.png";
	var otherframe = 1;
	var fadeinOther;
	var fadeoutOther;
/*
	var blogc = document.getElementById("blogc");
	var blogctx = blogc.getContext("2d");
	var blogimg = document.createElement("img");
	blogimg.src = "../img/nav/blog-inactive.png";
	var blogimga = document.createElement("img");
	blogimga.src = "../img/nav/blog-active.png";
	var blogframe = 1;
	var fadeinBlog;
	var fadeoutBlog;
*/
	///////////////////////////////////////////////////////////////////////////////////////////////
	// DRAWING NAV ////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	homeimg.onload = function() {
		homectx.save();
		homectx.shadowColor = "#444";
		homectx.shadowBlur = 3;
		homectx.shadowOffsetX = 2;
		homectx.shadowOffsetY = 3;
		homectx.drawImage(homeimg, 0, 0);
		homectx.beginPath();
		homectx.arc(0, 0, 75, 0, Math.PI * 2, true);
		homectx.clip();
		homectx.closePath();
		homectx.restore();
	}

	resumeimg.onload = function() {
		resumectx.save();
		resumectx.shadowColor = "#444"
		resumectx.shadowBlur = 3;
		resumectx.shadowOffsetX = 2;
		resumectx.shadowOffsetY = 3;
		resumectx.drawImage(resumeimg, 0, 0);
		resumectx.beginPath();
		resumectx.arc(0, 0, 40, 0, Math.PI * 2, true);
		resumectx.clip();
		resumectx.closePath();
		resumectx.restore();
	}

	webimg.onload = function() {
		webctx.save();
		webctx.shadowColor = "#444"
		webctx.shadowBlur = 3;
		webctx.shadowOffsetX = 2;
		webctx.shadowOffsetY = 3;
		webctx.drawImage(webimg, 0, 0);
		webctx.beginPath();
		webctx.arc(0, 0, 40, 0, Math.PI * 2, true);
		webctx.clip();
		webctx.closePath();
		webctx.restore();
	}

	mobileimg.onload = function() {
		mobilectx.save();
		mobilectx.shadowColor = "#444"
		mobilectx.shadowBlur = 3;
		mobilectx.shadowOffsetX = 2;
		mobilectx.shadowOffsetY = 3;
		mobilectx.drawImage(mobileimg, 0, 0);
		mobilectx.beginPath();
		mobilectx.arc(0, 0, 40, 0, Math.PI * 2, true);
		mobilectx.clip();
		mobilectx.closePath();
		mobilectx.restore();
	}

	moviesimg.onload = function() {
		moviesctx.save();
		moviesctx.shadowColor = "#444"
		moviesctx.shadowBlur = 3;
		moviesctx.shadowOffsetX = 2;
		moviesctx.shadowOffsetY = 3;
		moviesctx.drawImage(moviesimg, 0, 0);
		moviesctx.beginPath();
		moviesctx.arc(0, 0, 40, 0, Math.PI * 2, true);
		moviesctx.clip();
		moviesctx.closePath();
		moviesctx.restore();
	}

	otherimg.onload = function() {
		otherctx.save();
		otherctx.shadowColor = "#444"
		otherctx.shadowBlur = 3;
		otherctx.shadowOffsetX = 2;
		otherctx.shadowOffsetY = 3;
		otherctx.drawImage(otherimg, 0, 0);
		otherctx.beginPath();
		otherctx.arc(0, 0, 40, 0, Math.PI * 2, true);
		otherctx.clip();
		otherctx.closePath();
		otherctx.restore();
	}
/*
	blogimg.onload = function() {
		blogctx.save();
		blogctx.shadowColor = "#444"
		blogctx.shadowBlur = 3;
		blogctx.shadowOffsetX = 2;
		blogctx.shadowOffsetY = 3;
		blogctx.drawImage(blogimg, 0, 0);
		blogctx.beginPath();
		blogctx.arc(0, 0, 40, 0, Math.PI * 2, true);
		blogctx.clip();
		blogctx.closePath();
		blogctx.restore();
	}
*/
	///////////////////////////////////////////////////////////////////////////////////////////////
	// MOUSEOVER ANIMATIONS ///////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	$("#homec").mouseover(function() {
		clearInterval(fadeoutHome);
		fadeinHome = setInterval(function() {
			if (homeframe == 20) {
				homectx.clearRect(0, 0, homec.width, homec.height);
				homectx.save();
				homectx.shadowColor = "#444";
				homectx.shadowBlur = 3;
				homectx.shadowOffsetX = 2;
				homectx.shadowOffsetY = 3;
				homectx.drawImage(homeimga, 0, 0);
				homectx.beginPath();
				homectx.arc(0, 0, 75, 0, Math.PI * 2, true);
				homectx.clip();
				homectx.closePath();
				homectx.restore();
				clearInterval(fadeinHome);
			} else {
				homectx.clearRect(0, 0, homec.width, homec.height);
				homectx.save();
				homectx.shadowColor = "#444";
				homectx.shadowBlur = 3;
				homectx.shadowOffsetX = 2;
				homectx.shadowOffsetY = 3;
				homectx.drawImage(homeimg, 0, 0);
				homectx.beginPath();
				homectx.arc(0, 0, 75, 0, Math.PI * 2, true);
				homectx.clip();
				homectx.closePath();
				homectx.restore();
				homectx.save();
				homectx.globalAlpha = (1 / 20) * homeframe;
				homectx.shadowBlur = 3;
				homectx.shadowOffsetX = 2;
				homectx.shadowOffsetY = 3;
				homectx.drawImage(homeimga, 0, 0);
				homectx.beginPath();
				homectx.arc(0, 0, 75, 0, Math.PI * 2, true);
				homectx.clip();
				homectx.closePath();
				homectx.restore();
				homeframe++;
			}
		}, 20);
	});

	$("#resumec").mouseover(function() {
		clearInterval(fadeoutResume);
		fadeinResume = setInterval(function() {
			if (resumeframe == 20) {
				resumectx.clearRect(0, 0, resumec.width, resumec.height);
				resumectx.save();
				resumectx.shadowColor = "#444"
				resumectx.shadowBlur = 3;
				resumectx.shadowOffsetX = 2;
				resumectx.shadowOffsetY = 3;
				resumectx.drawImage(resumeimga, 0, 0);
				resumectx.beginPath();
				resumectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				resumectx.clip();
				resumectx.closePath();
				resumectx.restore();
				clearInterval(fadeinResume);
			} else {
				resumectx.clearRect(0, 0, resumec.width, resumec.height);
				resumectx.save();
				resumectx.shadowColor = "#444"
				resumectx.shadowBlur = 3;
				resumectx.shadowOffsetX = 2;
				resumectx.shadowOffsetY = 3;
				resumectx.drawImage(resumeimg, 0, 0);
				resumectx.beginPath();
				resumectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				resumectx.clip();
				resumectx.closePath();
				resumectx.restore();
				resumectx.save();
				resumectx.globalAlpha = (1 / 20) * resumeframe;
				resumectx.shadowBlur = 3;
				resumectx.shadowOffsetX = 2;
				resumectx.shadowOffsetY = 3;
				resumectx.drawImage(resumeimga, 0, 0);
				resumectx.beginPath();
				resumectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				resumectx.clip();
				resumectx.closePath();
				resumectx.restore();
				resumeframe++;
			}
		}, 20);
	});

	$("#webc").mouseover(function() {
		clearInterval(fadeoutWeb);
		fadeinWeb = setInterval(function() {
			if (webframe == 20) {
				webctx.clearRect(0, 0, webc.width, webc.height);
				webctx.save();
				webctx.shadowColor = "#444"
				webctx.shadowBlur = 3;
				webctx.shadowOffsetX = 2;
				webctx.shadowOffsetY = 3;
				webctx.drawImage(webimga, 0, 0);
				webctx.beginPath();
				webctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				webctx.clip();
				webctx.closePath();
				webctx.restore();
				clearInterval(fadeinWeb);
			} else {
				webctx.clearRect(0, 0, webc.width, webc.height);
				webctx.save();
				webctx.shadowColor = "#444"
				webctx.shadowBlur = 3;
				webctx.shadowOffsetX = 2;
				webctx.shadowOffsetY = 3;
				webctx.drawImage(webimg, 0, 0);
				webctx.beginPath();
				webctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				webctx.clip();
				webctx.closePath();
				webctx.restore();
				webctx.save();
				webctx.globalAlpha = (1 / 20) * webframe;
				webctx.shadowBlur = 3;
				webctx.shadowOffsetX = 2;
				webctx.shadowOffsetY = 3;
				webctx.drawImage(webimga, 0, 0);
				webctx.beginPath();
				webctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				webctx.clip();
				webctx.closePath();
				webctx.restore();
				webframe++;
			}
		}, 20);
	});

	$("#mobilec").mouseover(function() {
		clearInterval(fadeoutMobile);
		fadeinMobile = setInterval(function() {
			if (mobileframe == 20) {
				mobilectx.clearRect(0, 0, mobilec.width, mobilec.height);
				mobilectx.save();
				mobilectx.shadowColor = "#444"
				mobilectx.shadowBlur = 3;
				mobilectx.shadowOffsetX = 2;
				mobilectx.shadowOffsetY = 3;
				mobilectx.drawImage(mobileimga, 0, 0);
				mobilectx.beginPath();
				mobilectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				mobilectx.clip();
				mobilectx.closePath();
				mobilectx.restore();
				clearInterval(fadeinMobile);
			} else {
				mobilectx.clearRect(0, 0, mobilec.width, mobilec.height);
				mobilectx.save();
				mobilectx.shadowColor = "#444"
				mobilectx.shadowBlur = 3;
				mobilectx.shadowOffsetX = 2;
				mobilectx.shadowOffsetY = 3;
				mobilectx.drawImage(mobileimg, 0, 0);
				mobilectx.beginPath();
				mobilectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				mobilectx.clip();
				mobilectx.closePath();
				mobilectx.restore();
				mobilectx.save();
				mobilectx.globalAlpha = (1 / 20) * mobileframe;
				mobilectx.shadowBlur = 3;
				mobilectx.shadowOffsetX = 2;
				mobilectx.shadowOffsetY = 3;
				mobilectx.drawImage(mobileimga, 0, 0);
				mobilectx.beginPath();
				mobilectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				mobilectx.clip();
				mobilectx.closePath();
				mobilectx.restore();
				mobileframe++;
			}
		}, 20);
	});

	$("#moviesc").mouseover(function() {
		clearInterval(fadeoutMovies);
		fadeinMovies = setInterval(function() {
			if (moviesframe == 20) {
				moviesctx.clearRect(0, 0, moviesc.width, moviesc.height);
				moviesctx.save();
				moviesctx.shadowColor = "#444"
				moviesctx.shadowBlur = 3;
				moviesctx.shadowOffsetX = 2;
				moviesctx.shadowOffsetY = 3;
				moviesctx.drawImage(moviesimga, 0, 0);
				moviesctx.beginPath();
				moviesctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				moviesctx.clip();
				moviesctx.closePath();
				moviesctx.restore();
				clearInterval(fadeinMovies);
			} else {
				moviesctx.clearRect(0, 0, moviesc.width, moviesc.height);
				moviesctx.save();
				moviesctx.shadowColor = "#444"
				moviesctx.shadowBlur = 3;
				moviesctx.shadowOffsetX = 2;
				moviesctx.shadowOffsetY = 3;
				moviesctx.drawImage(moviesimg, 0, 0);
				moviesctx.beginPath();
				moviesctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				moviesctx.clip();
				moviesctx.closePath();
				moviesctx.restore();
				moviesctx.save();
				moviesctx.globalAlpha = (1 / 20) * moviesframe;
				moviesctx.shadowBlur = 3;
				moviesctx.shadowOffsetX = 2;
				moviesctx.shadowOffsetY = 3;
				moviesctx.drawImage(moviesimga, 0, 0);
				moviesctx.beginPath();
				moviesctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				moviesctx.clip();
				moviesctx.closePath();
				moviesctx.restore();
				moviesframe++;
			}
		}, 20);
	});

	$("#otherc").mouseover(function() {
		clearInterval(fadeoutOther);
		fadeinOther = setInterval(function() {
			if (otherframe == 20) {
				otherctx.clearRect(0, 0, otherc.width, otherc.height);
				otherctx.save();
				otherctx.shadowColor = "#444"
				otherctx.shadowBlur = 3;
				otherctx.shadowOffsetX = 2;
				otherctx.shadowOffsetY = 3;
				otherctx.drawImage(otherimga, 0, 0);
				otherctx.beginPath();
				otherctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				otherctx.clip();
				otherctx.closePath();
				otherctx.restore();
				clearInterval(fadeinOther);
			} else {
				otherctx.clearRect(0, 0, otherc.width, otherc.height);
				otherctx.save();
				otherctx.shadowColor = "#444"
				otherctx.shadowBlur = 3;
				otherctx.shadowOffsetX = 2;
				otherctx.shadowOffsetY = 3;
				otherctx.drawImage(otherimg, 0, 0);
				otherctx.beginPath();
				otherctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				otherctx.clip();
				otherctx.closePath();
				otherctx.restore();
				otherctx.save();
				otherctx.globalAlpha = (1 / 20) * otherframe;
				otherctx.shadowBlur = 3;
				otherctx.shadowOffsetX = 2;
				otherctx.shadowOffsetY = 3;
				otherctx.drawImage(otherimga, 0, 0);
				otherctx.beginPath();
				otherctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				otherctx.clip();
				otherctx.closePath();
				otherctx.restore();
				otherframe++;
			}
		}, 20);
	});

	$("#blogc").mouseover(function() {
		clearInterval(fadeoutBlog);
		fadeinBlog = setInterval(function() {
			if (blogframe == 20) {
				blogctx.clearRect(0, 0, blogc.width, blogc.height);
				blogctx.save();
				blogctx.shadowColor = "#444"
				blogctx.shadowBlur = 3;
				blogctx.shadowOffsetX = 2;
				blogctx.shadowOffsetY = 3;
				blogctx.drawImage(blogimga, 0, 0);
				blogctx.beginPath();
				blogctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				blogctx.clip();
				blogctx.closePath();
				blogctx.restore();
				clearInterval(fadeinBlog);
			} else {
				blogctx.clearRect(0, 0, blogc.width, blogc.height);
				blogctx.save();
				blogctx.shadowColor = "#444"
				blogctx.shadowBlur = 3;
				blogctx.shadowOffsetX = 2;
				blogctx.shadowOffsetY = 3;
				blogctx.drawImage(blogimg, 0, 0);
				blogctx.beginPath();
				blogctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				blogctx.clip();
				blogctx.closePath();
				blogctx.restore();
				blogctx.save();
				blogctx.globalAlpha = (1 / 20) * blogframe;
				blogctx.shadowBlur = 3;
				blogctx.shadowOffsetX = 2;
				blogctx.shadowOffsetY = 3;
				blogctx.drawImage(blogimga, 0, 0);
				blogctx.beginPath();
				blogctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				blogctx.clip();
				blogctx.closePath();
				blogctx.restore();
				blogframe++;
			}
		}, 20);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////
	// MOUSELEAVE ANIMATIONS //////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////

	$("#homec").mouseleave(function() {
		clearInterval(fadeinHome);
		fadeoutHome = setInterval(function() {
			if (homeframe == 1) {
				homectx.clearRect(0, 0, homec.width, homec.height);
				homectx.save();
				homectx.shadowColor = "#444";
				homectx.shadowBlur = 3;
				homectx.shadowOffsetX = 2;
				homectx.shadowOffsetY = 3;
				homectx.drawImage(homeimg, 0, 0);
				homectx.beginPath();
				homectx.arc(0, 0, 75, 0, Math.PI * 2, true);
				homectx.clip();
				homectx.closePath();
				homectx.restore();
				clearInterval(fadeoutHome);
			} else {
				homectx.clearRect(0, 0, homec.width, homec.height);
				homectx.save();
				homectx.shadowColor = "#444";
				homectx.shadowBlur = 3;
				homectx.shadowOffsetX = 2;
				homectx.shadowOffsetY = 3;
				homectx.drawImage(homeimg, 0, 0);
				homectx.beginPath();
				homectx.arc(0, 0, 75, 0, Math.PI * 2, true);
				homectx.clip();
				homectx.closePath();
				homectx.restore();
				homectx.save();
				homectx.globalAlpha = (1 / 20) * homeframe;
				homectx.shadowBlur = 3;
				homectx.shadowOffsetX = 2;
				homectx.shadowOffsetY = 3;
				homectx.drawImage(homeimga, 0, 0);
				homectx.beginPath();
				homectx.arc(0, 0, 75, 0, Math.PI * 2, true);
				homectx.clip();
				homectx.closePath();
				homectx.restore();
				homeframe--;
			}
		}, 30);
	});

	$("#resumec").mouseleave(function() {
		clearInterval(fadeinResume);
		fadeoutResume = setInterval(function() {
			if (resumeframe == 1) {
				resumectx.clearRect(0, 0, resumec.width, resumec.height);
				resumectx.save();
				resumectx.shadowColor = "#444"
				resumectx.shadowBlur = 3;
				resumectx.shadowOffsetX = 2;
				resumectx.shadowOffsetY = 3;
				resumectx.drawImage(resumeimg, 0, 0);
				resumectx.beginPath();
				resumectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				resumectx.clip();
				resumectx.closePath();
				resumectx.restore();
				clearInterval(fadeoutResume);
			} else {
				resumectx.clearRect(0, 0, resumec.width, resumec.height);
				resumectx.save();
				resumectx.shadowColor = "#444"
				resumectx.shadowBlur = 3;
				resumectx.shadowOffsetX = 2;
				resumectx.shadowOffsetY = 3;
				resumectx.drawImage(resumeimg, 0, 0);
				resumectx.beginPath();
				resumectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				resumectx.clip();
				resumectx.closePath();
				resumectx.restore();
				resumectx.save();
				resumectx.globalAlpha = (1 / 20) * resumeframe;
				resumectx.shadowBlur = 3;
				resumectx.shadowOffsetX = 2;
				resumectx.shadowOffsetY = 3;
				resumectx.drawImage(resumeimga, 0, 0);
				resumectx.beginPath();
				resumectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				resumectx.clip();
				resumectx.closePath();
				resumectx.restore();
				resumeframe--;
			}
		}, 30);
	});

	$("#webc").mouseleave(function() {
		clearInterval(fadeinWeb);
		fadeoutWeb = setInterval(function() {
			if (webframe == 1) {
				webctx.clearRect(0, 0, webc.width, webc.height);
				webctx.save();
				webctx.shadowColor = "#444"
				webctx.shadowBlur = 3;
				webctx.shadowOffsetX = 2;
				webctx.shadowOffsetY = 3;
				webctx.drawImage(webimg, 0, 0);
				webctx.beginPath();
				webctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				webctx.clip();
				webctx.closePath();
				webctx.restore();
				clearInterval(fadeoutWeb);
			} else {
				webctx.clearRect(0, 0, webc.width, webc.height);
				webctx.save();
				webctx.shadowColor = "#444"
				webctx.shadowBlur = 3;
				webctx.shadowOffsetX = 2;
				webctx.shadowOffsetY = 3;
				webctx.drawImage(webimg, 0, 0);
				webctx.beginPath();
				webctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				webctx.clip();
				webctx.closePath();
				webctx.restore();
				webctx.save();
				webctx.globalAlpha = (1 / 20) * webframe;
				webctx.shadowBlur = 3;
				webctx.shadowOffsetX = 2;
				webctx.shadowOffsetY = 3;
				webctx.drawImage(webimga, 0, 0);
				webctx.beginPath();
				webctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				webctx.clip();
				webctx.closePath();
				webctx.restore();
				webframe--;
			}
		}, 30);	
	});

	$("#mobilec").mouseleave(function() {
		clearInterval(fadeinMobile);
		fadeoutMobile = setInterval(function() {
			if (mobileframe == 1) {
				mobilectx.clearRect(0, 0, homec.width, homec.height);
				mobilectx.save();
				mobilectx.shadowColor = "#444"
				mobilectx.shadowBlur = 3;
				mobilectx.shadowOffsetX = 2;
				mobilectx.shadowOffsetY = 3;
				mobilectx.drawImage(mobileimg, 0, 0);
				mobilectx.beginPath();
				mobilectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				mobilectx.clip();
				mobilectx.closePath();
				mobilectx.restore();
			} else {
				mobilectx.clearRect(0, 0, mobilec.width, mobilec.height);
				mobilectx.save();
				mobilectx.shadowColor = "#444"
				mobilectx.shadowBlur = 3;
				mobilectx.shadowOffsetX = 2;
				mobilectx.shadowOffsetY = 3;
				mobilectx.drawImage(mobileimg, 0, 0);
				mobilectx.beginPath();
				mobilectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				mobilectx.clip();
				mobilectx.closePath();
				mobilectx.restore();
				mobilectx.save();
				mobilectx.globalAlpha = (1 / 20) * mobileframe;
				mobilectx.shadowBlur = 3;
				mobilectx.shadowOffsetX = 2;
				mobilectx.shadowOffsetY = 3;
				mobilectx.drawImage(mobileimga, 0, 0);
				mobilectx.beginPath();
				mobilectx.arc(0, 0, 40, 0, Math.PI * 2, true);
				mobilectx.clip();
				mobilectx.closePath();
				mobilectx.restore();
				mobileframe--;
			}
		}, 30);
	});

	$("#moviesc").mouseleave(function() {
		clearInterval(fadeinMovies);
		fadeoutMovies = setInterval(function() {
			if (moviesframe == 1) {
				moviesctx.clearRect(0, 0, moviesc.width, moviesc.height);
				moviesctx.save();
				moviesctx.shadowColor = "#444"
				moviesctx.shadowBlur = 3;
				moviesctx.shadowOffsetX = 2;
				moviesctx.shadowOffsetY = 3;
				moviesctx.drawImage(moviesimg, 0, 0);
				moviesctx.beginPath();
				moviesctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				moviesctx.clip();
				moviesctx.closePath();
				moviesctx.restore();
			} else {
				moviesctx.clearRect(0, 0, moviesc.width, moviesc.height);
				moviesctx.save();
				moviesctx.shadowColor = "#444"
				moviesctx.shadowBlur = 3;
				moviesctx.shadowOffsetX = 2;
				moviesctx.shadowOffsetY = 3;
				moviesctx.drawImage(moviesimg, 0, 0);
				moviesctx.beginPath();
				moviesctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				moviesctx.clip();
				moviesctx.closePath();
				moviesctx.restore();
				moviesctx.save();
				moviesctx.globalAlpha = (1 / 20) * moviesframe;
				moviesctx.shadowBlur = 3;
				moviesctx.shadowOffsetX = 2;
				moviesctx.shadowOffsetY = 3;
				moviesctx.drawImage(moviesimga, 0, 0);
				moviesctx.beginPath();
				moviesctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				moviesctx.clip();
				moviesctx.closePath();
				moviesctx.restore();
				moviesframe--;
			}
		}, 30);
	});

	$("#otherc").mouseleave(function() {
		clearInterval(fadeinOther);
		fadeoutOther = setInterval(function() {
			if (otherframe == 1) {
				otherctx.clearRect(0, 0, otherc.width, otherc.height);
				otherctx.save();
				otherctx.shadowColor = "#444"
				otherctx.shadowBlur = 3;
				otherctx.shadowOffsetX = 2;
				otherctx.shadowOffsetY = 3;
				otherctx.drawImage(otherimg, 0, 0);
				otherctx.beginPath();
				otherctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				otherctx.clip();
				otherctx.closePath();
				otherctx.restore();
				clearInterval(fadeoutOther);
			} else {
				otherctx.clearRect(0, 0, otherc.width, otherc.height);
				otherctx.save();
				otherctx.shadowColor = "#444"
				otherctx.shadowBlur = 3;
				otherctx.shadowOffsetX = 2;
				otherctx.shadowOffsetY = 3;
				otherctx.drawImage(otherimg, 0, 0);
				otherctx.beginPath();
				otherctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				otherctx.clip();
				otherctx.closePath();
				otherctx.restore();
				otherctx.save();
				otherctx.globalAlpha = (1 / 20) * otherframe;
				otherctx.shadowBlur = 3;
				otherctx.shadowOffsetX = 2;
				otherctx.shadowOffsetY = 3;
				otherctx.drawImage(otherimga, 0, 0);
				otherctx.beginPath();
				otherctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				otherctx.clip();
				otherctx.closePath();
				otherctx.restore();
				otherframe--;
			}
		}, 30);
	});

	$("#blogc").mouseleave(function() {
		clearInterval(fadeinBlog);
		fadeoutBlog = setInterval(function() {
			if (blogframe == 1) {
				blogctx.clearRect(0, 0, blogc.width, blogc.height);
				blogctx.save();
				blogctx.shadowColor = "#444"
				blogctx.shadowBlur = 3;
				blogctx.shadowOffsetX = 2;
				blogctx.shadowOffsetY = 3;
				blogctx.drawImage(blogimg, 0, 0);
				blogctx.beginPath();
				blogctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				blogctx.clip();
				blogctx.closePath();
				blogctx.restore();
				clearInterval(fadeoutBlog);
			} else {
				blogctx.clearRect(0, 0, blogc.width, blogc.height);
				blogctx.save();
				blogctx.shadowColor = "#444"
				blogctx.shadowBlur = 3;
				blogctx.shadowOffsetX = 2;
				blogctx.shadowOffsetY = 3;
				blogctx.drawImage(blogimg, 0, 0);
				blogctx.beginPath();
				blogctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				blogctx.clip();
				blogctx.closePath();
				blogctx.restore();
				blogctx.save();
				blogctx.globalAlpha = (1 / 20) * blogframe;
				blogctx.shadowBlur = 3;
				blogctx.shadowOffsetX = 2;
				blogctx.shadowOffsetY = 3;
				blogctx.drawImage(blogimga, 0, 0);
				blogctx.beginPath();
				blogctx.arc(0, 0, 40, 0, Math.PI * 2, true);
				blogctx.clip();
				blogctx.closePath();
				blogctx.restore();
				blogframe--;
			}
		}, 30);
	});

});