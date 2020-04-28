///////////////////////////////////////////////////////////////////////////////////////////////////
// waypoints-kit.js ///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// Library modularizing frequently used functions of waypoints.js (by Caleb Troughton).
// Based on my work for the Golden Gate National Parks Conservancy 2018 Annual Report and this
// guide from Bobby Kilpatrick 
// (https://spin.atomicobject.com/2015/05/31/scroll-anmiation-css-waypoints/).
///////////////////////////////////////////////////////////////////////////////////////////////////

// batchId()
// Creates a unique ID of all elements with the received class. IDs are formatted 'class-#'.
// The # is incremented by 1 per element. Ex: class-1, class-2, ... class-205, etc.
// selector - Selector for the elements to create a unique ID for.
function batchId(selector) {
	var elements = $(selector);
	for (element in elements) {
		var newId = selector + "-" + i;
		element.id = newId;
	}
}

// initializeOpacity()
// Initializes the opacity of a group of elements.
// Useful for initializing elements as invisible, to be revealed by Waypoints later.
// selector - Selector for elements to initialize.
// opacity - Opacity you'd like the selected elements to have.
function initializeOpacity(selector, opacity) {
	var elements = $(selector);
	for (element in elements) {
		element.css("opacity", opacity);
	}
}

// attachWaypoint()
// Attachs waypoint object to an element, given custom data.
// selector - Selector of the element(s) to attach a waypoint to.
// inCSS - CSS class to attach to the element when scrolling downwards and meeting the 
// element.
// outCSS - CSS class to attach to the element when scrolling upwards and leaving the
// element.
// offset - % of offset from the top of the browser at which to trigger the waypoint.
function attachWaypoint(selector, inCSS, outCSS, offset) {
	// Create a list of elements from the selector.
	var elements = $(selector);
	for (element in elements) {
		$(element.waypoint(function(direction) {
			// If the user is scrolling up, and leaves the element at the offset...
			if (direction === "up") {
				element.addClass(outCSS);
				element.removeClass(inCSS);
			// If the user is scrolling down, and meets the element at the offset...
			} else if (direction === "down") {
				element.addClass(inCSS);
				element.removeClass(outCSS);
			}

		}, {
			offset: offset + "%"
		});
	}
}