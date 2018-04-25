$(document).ready(function() {

	$('.button').hover(function(){
		$(this).css("color", "rgb(255, 80, 100)");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("color", "rgb(254, 255, 252)");
		$(this).css("cursor", "auto");
	});
	
	const distanceToNextImage = -450;
	let currentImageNumber = 0;

	$("#lightbox").hide(); //jQuery Function #3

	$(".item").click(function(){ //jQuery Function #4
		currentImageNumber = parseInt($(this).attr("id"), 10); //jQuery Function #5
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
		$("#lightbox").show(); //jQuery Function #6
	});

	$("#right").click(function() {
		if (currentImageNumber >= 9){
			$("#lightbox").hide();
		}
		currentImageNumber = currentImageNumber + 1;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	});

	$("#left").click(function(){
		if (currentImageNumber <= 0){
			$("#lightbox").hide();
		}
		currentImageNumber = currentImageNumber - 1;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	});

	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	});
});
