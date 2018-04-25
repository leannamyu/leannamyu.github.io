$(document).ready(function() {
  $('.button').hover(function(){
		$(this).css("color", "rgb(255, 80, 100)");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("color", "rgb(254, 255, 252)");
		$(this).css("cursor", "auto");
	});
});
