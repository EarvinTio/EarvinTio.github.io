$(document).ready(function() {

	// smooth scrolling
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		var targets = ['jerry','about','projects','passions'];

		$scrollDist = $(window).height()*jQuery.inArray(target.slice(1),targets);

		$('html, body').stop().animate({
			'scrollTop': $scrollDist
		}, 700, 'swing', function () {
			window.location.hash = target;
		});
		console.log($scrollDist)
	});

});

$(window).on("load", function() {

	leftWidth = $(".container > div:nth-child(1)").outerWidth(true);
	centreWidth = $(".container > div:nth-child(2)").outerWidth(true);
	rightWidth = $(".container > div:nth-child(3)").outerWidth(true);
	maxWidth = Math.max(leftWidth,rightWidth,centreWidth);
	$(".container > div").css("width", maxWidth);

});