$( document ).ready(function() {

$(document).on('click', '.nav a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top + 1
    }, 700);
});

$(window).scroll(function () {

if ($('#one').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
    	$(".nav a").removeClass("white black");
        $('.nav li:nth-child(1) a').addClass("white");
        $("ul.nav").css("background-color", "transparent");
        $("ul.nav li a").css("color", "#fff");
    }

if ($('#two').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
    	$(".nav a").removeClass("white black");
        $('.nav li:nth-child(2) a').addClass("white");
        $("ul.nav").css("background-color", "transparent");
        $("ul.nav li a").css("color", "#fff");
    }

if ($('#two').offset().top < ($(window).scrollTop() + $(".nav").height())) {
    	$(".nav a").removeClass("white black");
        $('.nav li:nth-child(2) a').addClass("black");
        $("ul.nav li a").css("color", "#000");
    }

if ($('#two').offset().top < ($(window).scrollTop())) {
        $("ul.nav").css("background-color", "#fff");
    }

if ($('#three').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
    	$(".nav a").removeClass("white black");
        $('.nav li:nth-child(3) a').addClass("black");
        $("ul.nav").css("background-color", "#fff");
        $("ul.nav li a").css("color", "#000");
    }

if ($('#three').offset().top < ($(window).scrollTop() + ($(".nav").height()))) {
        $("ul.nav").css("background-color", "transparent");
    }

if ($('#three').offset().top < ($(window).scrollTop())) {
    	$(".nav a").removeClass("white black");
        $('.nav li:nth-child(3) a').addClass("white");
        $("ul.nav li a").css("color", "#fff");
    }

if ($('#four').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
    	$(".nav a").removeClass("white black");
        $('.nav li:nth-child(4) a').addClass("white");
        $("ul.nav").css("background-color", "transparent");
        $("ul.nav li a").css("color", "#fff");
    }

if ($('#four').offset().top < ($(window).scrollTop() + $(".nav").height())) {
    	$(".nav a").removeClass("white black");
        $('.nav li:nth-child(4) a').addClass("black");
        $("ul.nav li a").css("color", "#000");
    }

if ($('#four').offset().top < ($(window).scrollTop())) {
        $("ul.nav").css("background-color", "#fff");
    }

if ($('#five').offset().top < ($(window).scrollTop() + ($(window).height() / 2))) {
    	$(".nav a").removeClass("white black");
        $('.nav li:nth-child(5) a').addClass("black");
    }
});

});

//auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}