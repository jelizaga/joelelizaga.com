///////////////////////////////////////////////////////////////////////////////////////////////////
// waypoints-kit.js ///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// Library modularizing frequently used functions of waypoints.js (by Caleb Troughton).
// Based on my work for the Golden Gate National Parks Conservancy 2018 Annual Report and this
// guide from Bobby Kilpatrick 
// (https://spin.atomicobject.com/2015/05/31/scroll-anmiation-css-waypoints/).
///////////////////////////////////////////////////////////////////////////////////////////////////

// batchId()
// Creates a unique ID of all elements with the received class. IDs are formatted 'id-#'.
// The # is incremented by 1 per element. Ex: id-1, id-2, ... id-205, etc.
// selector - Selector for the elements to create a unique ID for.
// id - Desired new ID of the elements.
function batchId(selector, id) {
	// Capture list of node elements using selector.
	var elementList = $(selector);
	// Convert that list into an array.
	var elementArray = Array.from(elementList);
	// Iterate through array, set new IDs to each element based on selector beginning at 'id-1'.
	var i = 1;
	elementArray.forEach(function(element) {
		var newId = id + "-" + i;
		element.id = newId;
		i++;
	});
}

// initializeOpacity() ////////////////////////////////////////////////////////////////////////////
// Initializes the opacity of a group of elements.
// Useful for initializing elements as invisible, to be revealed by Waypoints later.
// selector - Selector for elements to initialize.
// opacity - Opacity you'd like the selected elements to have.
function initializeOpacity(selector, opacity) {
	// Capture list of node elements using selector.
	var elementList = $(selector);
	// Convert that list to an array.
	var elementArray = Array.from(elementList);
	// Iterate through the array, set opacity.
	elementArray.forEach(function(element) {
		$(element).css("opacity", opacity);
	});
}

// attachWaypoint() ///////////////////////////////////////////////////////////////////////////////
// Attachs waypoint object to an element, given custom data.
// selector - Selector of the element(s) to attach a waypoint to.
// inCSS - CSS class to attach to the element when scrolling downwards and meeting the 
// element.
// outCSS - CSS class to attach to the element when scrolling upwards and leaving the
// element.
// offset - % of offset from the top of the browser at which to trigger the waypoint.
// DEPENDS ON: /js/jquery.waypoints.min.js
function attachWaypoint(selector, inCSS, outCSS, offset) {
	// Create a list of node elements from the selector.
	var elementList = $(selector);
	// Convert that list into an array.
	var elementArray = Array.from(elementList);
	// Iterate through the array, attach a Waypoint object to each element at the specified
	// offset.
	elementArray.forEach(function(element) {
		// Add the 'animated' class, which will set the animation-fill-mode attribute to
		// 'both,' allowing both sides of the animation to hold upon execution.
		$(element).addClass("animated");
		// Affix the waypoint and configure with the appropriate CSS.
		$(element).waypoint(function(direction) {
			// If the user is scrolling up, and leaves the element at the offset...
			if (direction === "up") {
				$(element).addClass(outCSS);
				$(element).removeClass(inCSS);
			// If the user is scrolling down, and meets the element at the offset...
			} else if (direction === "down") {
				$(element).addClass(inCSS);
				$(element).removeClass(outCSS);
			}

		}, {
			offset: offset + "%"
		});

	});
}