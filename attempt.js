$(document).ready(function(){
	console.log("Welcome to my website! Thank you for taking an interest in me!");
	
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