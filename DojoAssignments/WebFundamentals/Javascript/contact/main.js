$(document).ready(function(){
    $("button").click(function(){
  
      $('.card').append(
          '<div class="contactcard">' + '<p></p></br> <h2>' + $("#firstName").val() + " " + $("#lastName").val() + '</h2>' +
          '<p class="class2">Click for description!</p>' + '<p class="class1">' + $("#description").val() + ' </p><p class="class1">click again!</p>' + '</div>');
    })


    $('.card').on('click', '.contactcard', function(){
        $(this).children().toggle();
        // $(this).text("Self-intro");
     })


    // $('h3, p').click(function(){
    //     $(this).siblings().hide();
    // })
})