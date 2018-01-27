$(document).ready(function() {

	$(".mobile-menu-items").css("display", "none");
	var menuCollapsed = true;

	$(".mobile-menu-head").click(function() {
		if (menuCollapsed) {
			$(".mobile-menu-items").css("display", "block");
			menuCollapsed = false;
		} else {
			$(".mobile-menu-items").css("display", "none");
			menuCollapsed = true;
		}
	})
	
});