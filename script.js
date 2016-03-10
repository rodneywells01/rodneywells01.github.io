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
    $('html,body').animate({scrollTop: aTag.offset().top - 60},'slow');
}

function display_popup(data) {	
	// Fetch data
	var data = $("#" + data); 
	var title = data.children(".projecttitle").text();
	var description = data.children(".projectdescription").text();
	var image = data.children(".projectimage").text();
	var linktext = data.children(".projectlink").text();
	var github = data.children(".projectgithub").text();	
	var link = data.children(".projectlinkactual").text();
	if (!link) { link = "http://" + linktext } 

	// Fill in data. 
	$("#popupinner").children(".title").text(title);
	$("#popuppiccontainer").children("img").attr("src", image);
	$("#popupcontent").children(".absolutecenter").text(description);
	$("#popuplink").children("a").text(linktext);
	$("#popuplink").children("a").attr("href", link);
	$("#popupgithub").children("a").attr("href", github);

	if (linktext == "N/A") {
		$("#popupcontentlinkcontainer").css("display", "none");	
		$("#popupcontent").css("width", "100%");
	} else {
		$("#popupcontentlinkcontainer").css("display", "inline-block");		
		$("#popupcontent").css("width", "70%");
	}

	// Display data.
	$("#popupbackground").fadeIn("slow", function() {});
}

function close_popup() {
	$("#popupbackground").fadeOut('slow', function(){});
}