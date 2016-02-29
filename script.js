$(document).ready(function() {
	var collageblocks = $(".collageblock");

	var collagecolors = ["aliceblue", "antiquewhite", "cadetblue", "cornsilk", "darkcyan", "darkgoldenrod", "darksalmon", "darkslategrey", "darkseagreen", "forestgreen", "goldenrod", "lightblue", "lightgreen", "lightseagreen", "mediumpurple"];

	console.log(collageblocks.length);
	$.each(collageblocks, function(index, block) {
		randnum = Math.floor(Math.random() * collagecolors.length);
		$(block).css("background-color", collagecolors[randnum]);
	});

});