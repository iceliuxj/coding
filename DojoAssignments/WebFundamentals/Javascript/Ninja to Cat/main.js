$(document).ready(function(){
    var imgUrlMap = {
        0: "img/cat0.png",
        1: "img/cat1.png",
        2: "img/cat2.png",
        3: "img/cat3.png",
        4: "img/cat4.png",
        5: "img/ninja0.png",
        6: "img/ninja1.png",
        7: "img/ninja2.png",
        8: "img/ninja3.png",
        9: "img/ninja4.png"
    }

    $("img").click(function(){
        var index = Math.floor(Math.random()*10);
        $(this).attr("src", imgUrlMap[index]);
    })
      
})
