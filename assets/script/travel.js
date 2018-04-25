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

	$("#lightbox").hide();
	$("#overlay").hide();

	$(".item").click(function(){
		currentImageNumber = parseInt($(this).attr("id"), 10);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
		$("#overlay").show();
		$("#lightbox").show();
	});

	$("#right").click(function() {
		if (currentImageNumber >= 14){
			$("#lightbox").hide();
			$("#overlay").hide();
		}
		currentImageNumber = currentImageNumber + 1;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	});

	$("#left").click(function(){
		if (currentImageNumber <= 0){
			$("#lightbox").hide();
			$("#overlay").hide();
		}
		currentImageNumber = currentImageNumber - 1;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	});

	$("#overlay, #close").click(function() {
		$("#overlay").hide();
		$("#lightbox").hide();
	});
});
