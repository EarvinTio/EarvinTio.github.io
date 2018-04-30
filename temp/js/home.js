$(document).ready(function () {

    h2Margin = $(".dropdown > h2").css("margin-left");
    $(".dropdown-content a").css("margin", "0.8em " + h2Margin);

    myTextHeight = $(".myText").css("height");
    gridItemHeight = $(".grid-item").css("height");
    contentMarginTop = $(window).height() - parseInt(myTextHeight.slice(0,-2)) - parseInt(gridItemHeight.slice(0,-2)) - $(window).height()*0.05;

    if ($(window).width() < 1500) {
        contentMarginTop = contentMarginTop - $(window).width()*0.0075;
    } else {
        contentMarginTop = contentMarginTop - 15;
    }

    marginStr = contentMarginTop.toString() + "px";
    $(".content").css("margin-top", marginStr);
    
 });