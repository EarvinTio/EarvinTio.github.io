$(document).ready(function() {

	// smooth scrolling
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		if (target.slice(1) == "intro") {
			$scrollDist = 0;
		} else {
			$scrollDist = $(window).height()
		}
		$('html, body').stop().animate({
			'scrollTop': $scrollDist
		}, 700, 'swing', function () {
			window.location.hash = target;
		});
		console.log($scrollDist)
	});

});

$(window).on("load", function() {

	// loader - transitions the opacity and z-index of a white div
	// overflow is added after to prevent the scroll bar from appearing during the loading
	$("body").css("overflow-y", "scroll");
	$(".loader").css("opacity", "0");
	$(".loader").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
	function(e) {
		$(".loader").css("z-index", "-3");
	});

	// adds 2.5em padding to the left of .introText regardless of the size of the image
	imgWidth = $("#me").width();
	introMargin = imgWidth + $(window).width()*0.025;
	$(".introText").css("margin-left", introMargin.toString() + "px");

});

function resizeNav() {
	// overflow-y changes the width and makes nav spill over the scroll bar 
	contentWidth = $(".content").outerWidth(true);
	$("nav").css("width", contentWidth);
	console.log("called")
}

window.onload = resizeNav;
window.resize = resizeNav;