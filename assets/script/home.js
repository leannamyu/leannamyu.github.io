$(document).ready(function() {
  $('.bigbutton').hover(function(){ //jQuery Function #1
    $(this).css("background", "rgb(255, 60, 90)"); //jQuery Function #2
    $(this).css("cursor", "pointer");
    $(this).css("transform", "scale(1.05)");
  }, function() {
    $(this).css("background", "rgb(255, 80, 100)");
    $(this).css("cursor", "auto");
    $(this).css("transform", "scale(1)");
  });
  $('.button').hover(function(){
    $(this).css("color", "rgb(255, 80, 100)");
    $(this).css("cursor", "pointer");
  }, function() {
    $(this).css("color", "rgb(254, 255, 252)");
    $(this).css("cursor", "auto");
  });
});
