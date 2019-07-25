$(window).on('load', function () {
    window.location.hash = '';
    $(window).scrollTop("#section1");
});

$(function () {
    $("#scroll-button").click(function () {
        console.log("click");
        $(window).scrollTop($('#section2').offset().top)
        $("#start-nav").attr("id", "side-nav");
        $("body").removeClass("overflow-hidden")
        $(".feature1").addClass("puff-in-center1");
        $(".feature1").removeClass("invisible")
        $(".feature2").addClass("puff-in-center2");
        $(".feature2").removeClass("invisible")
        $(".feature3").addClass("puff-in-center3");
        $(".feature3").removeClass("invisible")
        
    });
});


$(window).scroll(function () {

    if ($("#scroll-button").is(':in-viewport')) {
        $("#side-nav").removeClass("slide-in-blurred-top");
        $("#side-nav").addClass("slide-out-blurred-top");
    } else {
        $("#side-nav").removeClass("slide-out-blurred-top");
        $("#side-nav").addClass("slide-in-blurred-top");
        $("#side-nav").removeClass("invisible");
    };
});

$(function () {
    $(document).on("click","#side-nav a",function() {
        $("#nav").removeClass("pulsate-fwd");
        $("#side-nav > a.navbutton").removeClass("navbutton")
        $("#nav").addClass("slide-out-blurred-top")
        $("#side-nav a").addClass("line-through").not(this).removeClass("line-through");
        $("#side-nav a").removeClass("hover:text-gray-700").not(this).addClass("hover:text-gray-700");
        $("#side-nav a").addClass("text-indigo-300").not(this).removeClass("text-indigo-300");
    });
});