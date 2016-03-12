var aboutlistelems, aboutlist;
var projectlistelems, projectlist;
var experiencelistelems, experiencelist;
var skilllistelems, skilllist;
var contactlistelems, contactlist;

$(document).ready(function() {
	aboutlist = $("#about");
	projectlist = $("#projects");
	experiencelist = $("#experience");
	skilllist = $("#skills");
	contactlist = $("#contact");

	aboutlistelems = aboutlist.find(".displaycell");
	projectlistelems = projectlist.find(".displaycell");
	experiencelistelems = experiencelist.find(".displaycell");
	skilllistelems = skilllist.find(".displaycell");
	contactlistelems = contactlist.find(".displaycell");

	$(window).scroll(function() {
		update_navbar();
		display_new_cells();
	});

	$(window).load(function() {
		$("#navbarhighlight").fadeIn('fast');
		update_navbar();
	});

});

$(window).load(function() {
	display_new_cells();
});


function update_navbar() {
	var widthofname = $("#mynamecontainer").width();		
	var width = document.documentElement.clientWidth;
	
	
	// Pixel contribution relativetop 
	var sizeoftop = $("#navbar").height() + $("#topcardcontainer").height();			
	var relativetop = sizeoftop / $(document).height();
	var reltoppixels = relativetop * (width - widthofname);	


	var percentage = ($(window).scrollTop() / ($(document).height() - $(window).height()));				
	var leftpos = widthofname - reltoppixels // 100% correct
	+ (2 * (1 - percentage)) // Pixel contribution from left most border shift
	+ (width - widthofname + reltoppixels - $("#navbarhighlight").width()) * percentage; // Pixel Contribution of percentage 
	
	$("#navbarhighlight").css("left", leftpos);
}

function display_new_cells() {
	var ypos = window.pageYOffset + window.innerHeight;
	var offset = window.innerHeight / 2;
	if (ypos > aboutlist.position().top + offset) { trigger_new_cells(aboutlistelems); }
	if (ypos > projectlist.position().top + offset) { trigger_new_cells(projectlistelems); }
	if (ypos > experiencelist.position().top + offset) { trigger_new_cells(experiencelistelems); }
	if (ypos > skilllist.position().top + offset) { trigger_new_cells(skilllistelems); }
	if (ypos > contactlist.position().top + offset) { trigger_new_cells(contactlistelems); }
}

function trigger_new_cells(list) {
	$.each(list, function(index, item) {
		$(item).fadeIn("slow", function(){});
	});
}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top - 60},'slow');
}

function prepare_popup(data) {	
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
}

var navsdisplaying = false;
function pop_menu() {
	var navbar = $("#navbarlist");
	if (!navsdisplaying){
    	navbar.addClass('active').show().css({
	        left: -(navbar.outerWidth(true))
	    }).animate({
	        left: 0
	    }, 400);
    } else {
    	navbar.removeClass('active').animate({
            left: -(navbar.outerWidth(true))
        }, 400);
    }
 	navsdisplaying = !navsdisplaying;
}

function close_popup() {
	if (window.innerWidth < 950) {		
		$("#popupbackground").animate({top: window.innerHeight}, 300); 
	} else {
		$("#popupbackground").fadeOut('slow', function(){});	
	}
	displayingProject = false;	
}


var displayingProject = false;
function display_project_details(projectdetails) {
	if (window.innerWidth < 950) {
		if (!displayingProject) {
		// We want to expand content.		
			prepare_popup(projectdetails);
			$("#popupbackground").css("top", window.innerHeight);
			$("#popupbackground").css("display", "block");
			$("#popupbackground").animate({top: window.innerHeight - $("#popupbackground").height()}, 300);	
		} else {
			// Fade Content on div already in place. 
			$("#popupbackground").children().children().fadeOut('fast', function(){
				prepare_popup(projectdetails);
				$("#popupbackground").children().children().fadeIn('fast', function() {});
			});
		}			
	} else if (window.innerWidth >= 950 && !displayingProject) {			
		// Display data.
		$("#popupbackground").css("top", 0);
		prepare_popup(projectdetails);
		$("#popupbackground").fadeIn("slow", function() {});
	}
	displayingProject = true;
}