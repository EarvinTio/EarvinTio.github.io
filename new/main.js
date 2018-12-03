$(document).ready(function() {

	// smooth scrolling
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		if (target.slice(1) == "home") {
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