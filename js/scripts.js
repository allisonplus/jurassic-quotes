var jpq = {};

jpq.quotes = [
	"When you gotta go, you gotta go",
	"Hold onto your butts.",
	"God help us, we're in the hands of engineers.",
	"Gee, the lack of humility before nature that's being displayed here, uh... staggers me.",
	"Find Nedry! Check the vending machines!",
	"We spared no expense.",
	"Dodgson, Dodgson, we've got Dodgson here! Nobody cares.",
	"It's a UNIX system! I know this!",
	"Look... We can discuss sexism in survival situations when I get back.",
	"I am not a computer nerd. I prefer to be called a hacker!",
	"Clever girl",
	"Dino DNA",
	"Hello, John"
];

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

