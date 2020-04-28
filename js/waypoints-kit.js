///////////////////////////////////////////////////////////////////////////////////////////////////
// waypoints-kit.js ///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// Library modularizing frequently used functions of waypoints.js (by Caleb Troughton).
// Based on my work for the Golden Gate National Parks Conservancy 2018 Annual Report and this
// guide from Bobby Kilpatrick 
// (https://spin.atomicobject.com/2015/05/31/scroll-anmiation-css-waypoints/).
///////////////////////////////////////////////////////////////////////////////////////////////////

// initializeOpacity()
// Initializes the opacity of a group of elements.
// Useful for initializing elements as invisible, to be revealed by Waypoints later.
// selector - Selector for elements to initialize.
// opacity - Opacity you'd like the selected elements to have.
function initializeOpacity(selector, opacity) {
	var selected = $(selector);
	for (var i = 0; i < selector.length; i++) {
		var elementId = selector[i].id;
		$("#" + elementId).css("opacity", opacity);
	}
}

// attachWaypoint()
// Attachs waypoint object to an element, given custom data.
// id - ID of the element to attach a waypoint to.
// inCSS - CSS class to attach to the element when scrolling downwards and meeting the 
// element.
// outCSS - CSS class to attach to the element when scrolling upwards and leaving the
// element.
// offset - % of offset from the top of the browser at which to trigger the waypoint.
function attachWaypoint(id, inCSS, outCSS, offset) {

	$("#" + id).waypoint(function(direction) {
		// If the user is scrolling up, and leaves the element at the offset...
		if (direction === "up") {
			$("#" + id).addClass(outCSS);
			$("#" + id).removeClass(inCSS);
		// If the user is scrolling down, and meets the element at the offset...
		} else if {
			$("#" + id).addClass(inCSS);
			$("#" + id).removeClass(outCSS);
		}

	}, {
		offset: offset + "%"
	});
}