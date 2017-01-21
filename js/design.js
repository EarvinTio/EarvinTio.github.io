$( document ).ready(function() {

$('img[usemap]').rwdImageMaps();
$(".tile").on("click", expand);
$(".close").on("click", shrink);
$("#email").on("click", email);

$(".tile").hover( function(){
	if(!$(this).hasClass("selected")){
		$(this).css({
			opacity: 0.8
		});
	}
}, function(){
	$(this).css({
		opacity: 1
	});
});

var height = 0;
var width = 0;
var content = "";

function expand() {
if ($(":animated").length === 0) {
if(!$(this).hasClass("selected")){
	width = $(".content-right").width() - 10;
	console.log(width);
		$(this).addClass("selected");
		$(this).css("cursor", "auto");
		$(".tile:not(.selected)").animate( {
			opacity: 0
		}).queue( function() {
			$(".tile-icon").fadeOut();
			$(".tile hr").animate({
				width: "100%"
			});
			$("h2").animate({
				"font-size": "3.5em",
				margin: "0.67em 0 0.2em 0"
			});
			$(".selected").animate({
				height: "100%",
				width: width,
				"z-index": 2,
				opacity: 1
			}, 700 ).queue( function() {
				$(".selected").css("overflow-y", "auto");
				if ($(".selected").attr("id") == "work") {
					content = "#work-content";
					console.log("work");
				} else if ($(".selected").attr("id") == "resume") {
					content = "#resume-content";
					console.log("resume");
				} else if ($(".selected").attr("id") == "lettering") {
					content = "#lettering-content";
					console.log("lettering");
				} else {
					content = "#poetry-content";
					console.log("poetry");
				}
				$(content).animate({
					opacity: 1
				}, 800 ).queue( function() {
					if ($(":animated").length === 0) {
						$(".close").fadeIn();
					}
				$(this).dequeue();
				});
			$(this).dequeue();
			});
		$(this).dequeue();
		});
	}
}
}

function shrink() {
if ($(":animated").length === 0) {
	height = $(".tile:not(.selected)").css("height");
	width = $(".tile:not(.selected)").css("width");
	$(".close").fadeOut();
	$(".tile").css("cursor", "pointer");
	if ($(".selected").attr("id") == "work") {
		$("#work-content").animate({
			opacity: 0
		});
		console.log("work");
	} else if ($(".selected").attr("id") == "resume") {
		$("#resume-content").animate({
			opacity: 0
		});
		console.log("resume");
	} else if ($(".selected").attr("id") == "lettering") {
		$("#lettering-content").animate({
			opacity: 0
		});
		console.log("lettering");
	} else {
		$("#poetry-content").animate({
			opacity: 0
		});
		console.log("poetry");
	}
	$("h2").animate( {
		"font-size": "2em",
		margin: "0.83em 0 0.2em 0"
	});
	$(".tile hr").animate( {
		width: "35%"
	});
	$(".selected").animate( {
		height: height,
		width: width,
		"z-index": 1
	}, 700 ).queue( function() {
		$(".selected").css("overflow-y", "hidden");
		$(".selected").removeClass("selected");
		$(".tile").animate({
			opacity: 1
		});
		$(".tile img").fadeIn();
	$(this).dequeue();
	});
}
}

function email() {
	$("#email-text").slideDown();
}

$(window).on("resize",function(){ //NEED TO IMPROVE THIS FUNCTION
$(".tile").each( function() {
	if (!$(this).hasClass("selected")){
		$(this).css("width", "calc(50% - 10px)");
		$(this).css("height", "calc(50% - 5px)");
	} else {
		$(this).css("width", "100% - 10px");
	}
})
});

});