$(window).resize(function(){
	if ($(window).width()<1000) {
		$('span').removeAttr('tooltip');
	}
})
.resize();

$(document).on("scroll", onScroll);

if (screen && screen.width > 450) {

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
			//console.log($scrollDist)
		});

	});

	// source: https://css-tricks.com/snippets/css/typewriter-effect/
	document.addEventListener('DOMContentLoaded',function(event){
		// array with texts to type in typewriter
		var dataText = [ "Developed", "Designed", "Coded"];

		// type one text in the typwriter
		// keeps calling itself until the text is finished
		function typeWriter(text, i, fnCallback) {
			// check if text isn't finished yet
			if (i < (text.length)) {
			// add next character to span
			document.querySelector("footer p span").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(function() {
				typeWriter(text, i + 1, fnCallback)
			}, 100);
			}
			// text finished, call callback if there is a callback function
			else if (typeof fnCallback == 'function') {
			// call callback after timeout
				setTimeout(fnCallback, 700);
			}
		}
		// start a typewriter animation for a text in the dataText array
		function StartTextAnimation(i) {
			if (typeof dataText[i] == 'undefined'){
				StartTextAnimation(0);
			}
			// check if dataText[i] exists
			else if (i < dataText[i].length) {
				// text exists! start typewriter animation
				typeWriter(dataText[i], 0, function(){
				// after callback (and whole text has been animated), start next text
					StartTextAnimation(i + 1);
				});
			}
		}
		// start the text animation
		StartTextAnimation(0);
	});

}

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('nav p a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('nav p a').removeClass("active");
			currLink.addClass("active");
		}
	});
}

