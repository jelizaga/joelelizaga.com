$(document).ready(function() {

	// Default to a collapsed menu.
	$(".mobile-menu-items").css("display", "none");
	var menuCollapsed = true;

	// Toggle the menu's display on click.
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