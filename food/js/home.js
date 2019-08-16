$(document).ready(function () {


    if($(window).width()<760) {
        $(".left").removeClass("left").addClass("responsive1");
        $(".right").removeClass("right").addClass("responsive");

        $(".responsive1 p").on("click", function(){
            if ($(this).index() == 3)
                $('html,body').animate({
                scrollTop: $(".aboutme").offset().top}, 700);
            else if ($(this).index() == 4)
                $('html,body').animate({
                scrollTop: $(".school").offset().top}, 900);
            else if ($(this).index() == 5)
                $('html,body').animate({
                scrollTop: $(".experience").offset().top}, 1100);
            else if ($(this).index() == 6)
                $('html,body').animate({
                scrollTop: $(".extracurricular").offset().top}, 1300);
            else if ($(this).index() == 7)
                $('html,body').animate({
                scrollTop: $(".funfacts").offset().top}, 1500);            
        });
        $(".mobile-arrow").on("click", function(){
            $('html,body').animate({
            scrollTop: $(".responsive1").offset().top}, 700);
        });
    } else {
        setTimeout(function(){
            $(".left").css("width", "40%");
        }, 1000);

        setTimeout(function(){
            $(".left div").css("opacity", 1);
        }, 2000);

        var z = 0;
        var canClick = true;

        function expand(section){
            z++;
            $("."+section).css({
                "width": "60%",
                "z-index": z
            });
            setTimeout(function(){
                if ($("."+section+" .content div").height() > window.innerHeight)
                    $("."+section+" .content").css({
                        "align-items": "flex-start",
                        "overflow-y": "scroll"
                    });
            }, 1000);
            setTimeout(function(){
                $("."+section+" .content").css("opacity", 1);
            }, 1100);
            setTimeout(function(){
                $(".right:not(."+section+")").css("width", 0);
                $(".right:not(."+section+") .content").css("opacity", 0);
                $(".right:not(."+section+") .scroll").scrollTop(0);
            }, 1200);
        };

        $(".left p").on("click", function(){
            if(canClick) {

            canClick = false;

            if ($(this).index() == 3)
                expand("aboutme");
            else if ($(this).index() == 4)
                expand("school");
            else if ($(this).index() == 5)
                expand("experience");
            else if ($(this).index() == 6)
                expand("extracurricular");
            else if ($(this).index() == 7)
                expand("funfacts");
            setTimeout(function(){
                $(".close").css({
                    "z-index": 1000,
                    "opacity": 1
                });
            }, 1200);

            setTimeout(function(){
                canClick = true;
            }, 1500);

            }
        });

        $(".close").on("click", function(){
            $(this).css({
                "z-index": -1,
                "opacity": 0
            });
            $(".right .content").css("opacity", 0);
            setTimeout(function(){        
                $(".right").css("width", 0);
            }, 500);
            setTimeout(function(){        
                $(".scroll").scrollTop(0);
            }, 1000);
            z = 0;
        })

        $("h1 span").on("click", function(){
            if(canClick) {

            canClick = false;
            
            $(".close").css({
                "z-index": -1,
                "opacity": 0
            });
            $(".right .content").css("opacity", 0);
            setTimeout(function(){        
                $(".right").css("width", 0);
            }, 500);
            setTimeout(function(){        
                $(".scroll").scrollTop(0);
            }, 1000);
            z = 0;

            setTimeout(function(){
                canClick = true;
            }, 1500);

            }
        })
    };
 });