/*$(document).ready(function() {

	$("#project-carousel").css({"transform": "translate(-50px)"});
	
	// It seems like uneccessary browser overhead to always listen when you scroll, but you
	// can always just disable JS.

	$(window).scroll( function(){

    	$("#project-carousel").each( function(i) {
            
            var bottomOfCarousel = $(this).position().top + ($(this).outerHeight() / 2);
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            
			if(bottomOfWindow > bottomOfCarousel){
				$(this).animate({"transform": "translate(500px)"}, 1500); 
            }
            
        }); 

    });

});*/