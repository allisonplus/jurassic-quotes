var jpq = {};

jpq.quotes = ["When you gotta go, you gotta go", "Clever girl", "Dino DNA", "Hello, John"];

//Function that loads first quote on page load
$(document).ready(function() {
	$("#quote").html(jpq.quotes[jpq.random()]);
}); //END DOCUMENT READY

//Randomize quote picker
jpq.random = function() {
	return Math.floor(Math.random()*(jpq.quotes.length));
}

//On button click, fade out current quote and fade in next quote
$(function() {
	$(".button").on('click', function() {
		$("#quote").fadeOut(function() {
			$("#quote").fadeIn().html(jpq.quotes[jpq.random()]);
		});
	});
});

