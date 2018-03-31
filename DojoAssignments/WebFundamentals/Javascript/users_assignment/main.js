$(document).ready(function(){
  $("button").click(function(){

    $('#contactTable').append(
        '<tr><th>' + $("#firstName").val() + '</th>' +
        '<th>' + $("#lastName").val() + '</th>' +
        '<th>' + $("#emailAddress").val() + '</th>' +
        '<th>' + $("#phoneNumber").val() + '</th>' +
        + '</tr>');
  })
})