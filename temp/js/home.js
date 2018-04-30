$(document).ready(function () {
    h2Margin = $(".dropdown > h2").css("margin-left");
    $(".dropdown-content a").css("margin", "0.8em " + h2Margin);
    myTextHeight = $(".myText").css("height");
    gridItemHeight = $(".grid-item").css("height");
    contentMarginTop = $(window).height() - parseInt(myTextHeight.slice(0,-2)) - parseInt(gridItemHeight.slice(0,-2)) - $(window).height()*0.0575;
    marginStr = contentMarginTop.toString() + "px";
    console.log($(window).height());
    console.log(marginStr);
    $(".content").css("margin-top", marginStr);
 });