var mobilemode = false;
var mobiletransition = false;

var ultimatecontainerwidth; 

$(document).ready(function(){
	console.log("Connection established to js file!");
	console.log("Welcome to my website! Thank you for taking an interest in me!");
	
	// Start by capturing ultimate container size. 
	ultimatecontainerwidth = $('#ultimatecontainer').width();
	
	// Trigger a reszize event so that we can update locations. 
	resizeEvent();

	$(window).resize(function() {
		resizeEvent();
	});

	function resizeEvent() {
		// Resize has occured. 
		// Check the window size to determine mobilemode. 
		if ($(window).width() <= 946) {
			mobilemode = true; 
		} else {
			mobilemode = false;
		}

		if (!mobiletransition && mobilemode) {
			// Transition to mobile. 
			makeMobile();
			console.log("Mobile mode!");
			mobiletransition = true;
		} else if (mobiletransition && !mobilemode) {
			// Transition to regular. 
			unmakeMobile();
			mobiletransition = false;
		}
		
		// If size is large enough, resize needs. 
		if ($(window).width() > 700) {
			updateUltimateContainer(); // Ultimate container must be resized. 
			resizePortrait(); // Portrait cannot break off screen. 
		}
	}


	function updateUltimateContainer() {
		// The central content div must be resized to new column width.
		var buffer = 100;
		if ($(window).width() <= ultimatecontainerwidth + buffer) {
			// I want to shrink the ultimate container based on window size.
			// Unless it's mobile mode. TODO: 
			$("#ultimatecontainer").width($(window).width() - buffer);
			// Resize ultimate container. 
		} 
	}

	function makeMobile() {
		// Center Topics. 
		$(".topic").css("text-align", "center"); 
	}

	function unmakeMobile() {
		// Left-align Topics. 
		$(".topic").css("text-align", "left"); 
	}

	function resizePortrait() {

		if($("#sharedspace").width() <= 300) {
			// Portrait is too large, must resize. 
			$("#portrait").width($("#sharedspace").width());
			$("#portrait").height($("#portrait").width());
		} else if ($("#portrait").width() <= 300) {
			// Catch for quick resizes that breaks above. 
			$("#portrait").width(300);
			$("#portrait").height(300);
		}
	}

	// The following solution is provided by user Ian Clark on stackoverflow. 
	// http://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header
	
	function scroll_if_anchor(href) {
    href = typeof(href) == "string" ? href : $(this).attr("href");

    // If href missing, ignore
    if(!href) return;

    // You could easily calculate this dynamically if you prefer
    var fromTop = 140;

    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    var $target = $(href);

    // Older browsers without pushState might flicker here, as they momentarily
    // jump to the wrong position (IE < 10)
    if($target.length) {
        $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
        if(history && "pushState" in history) {
            history.pushState({}, document.title, window.location.pathname + href);
            return false;
        }
    }
}    

// When our page loads, check to see if it contains and anchor
// Intercept all anchor clicks
$("body").on("click", "a[href^='#']", scroll_if_anchor);
});