$(document).ready(function(){
    $("#hide").click(function(){
        $(".function1 p").hide();
    });

    $("#show").click(function(){
        $(".function1 p").show();
    });

    $("#sildeup").click(function(){
        $("#p1").slideUp();
    });

    $("#sildedown").click(function(){
        $("#p1").slideDown();
    });

    $("#toggle").click(function(){
        $("#p1").toggle();
    });

    $("#fadeout").click(function(){
        $(".function3 img").fadeOut();
    });

    $("#fadein").click(function(){
        $(".function3 img").fadeIn();
    });

    $("#addclass").click(function(){
        $(".function4 p").addClass("red");
    });

    $("#html").click(function(){
        $(".function5 p").html("<b>Alert!</b>");
    });

    $("#attr").click(function(){
        $(".function6 img").attr("width", "500");
    });

    $("#val").click(function(){
        $("input:text").val("Purple");
    });

    $("#val").click(function(){
        $("#p3").text("Green");
    });

});