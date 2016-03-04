$(document).ready(function() {
	var collageblocks = $(".collageblock");

	var collagecolors = ["aliceblue", "antiquewhite", "cadetblue", "cornsilk", "darkcyan", "darkgoldenrod", "darksalmon", "darkslategrey", "darkseagreen", "forestgreen", "goldenrod", "lightblue", "lightgreen", "lightseagreen", "mediumpurple"];

	$.each(collageblocks, function(index, block) {
		randnum = Math.floor(Math.random() * collagecolors.length);
		$(block).css("background-color", collagecolors[randnum]);
	});

	$(window).scroll(function() {
		update_navbar();
	});

	$(window).load(function() {
		$("#navbarhighlight").fadeIn('fast');
		update_navbar();
	});
	
});


function update_navbar() {
	var widthofname = $("#mynamecontainer").width();		
	var width = document.documentElement.clientWidth - 400 / $(window).height();
	
	// Pixel contribution relativetop 
	var sizeoftop = $("#navbar").height() + $("#topcardcontainer").height();			
	var relativetop = sizeoftop / $(document).height();
	var reltoppixels = relativetop * (width - widthofname);	


	var percentage = ($(window).scrollTop() / ($(document).height() - $(window).height()));			
	var leftpos = widthofname - reltoppixels // 100% right
	+ (width - widthofname + reltoppixels - $("#navbarhighlight").width()) * percentage; // Pixel Contribution of percentage 
	
	$("#navbarhighlight").css("left", leftpos);
}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
