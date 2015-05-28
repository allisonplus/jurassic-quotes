var jpq = {};

jpq.quotes = [
	"When you gotta go, you gotta go",
	"Hold onto your butts.",
	"God help us, we're in the hands of engineers.",
	"Gee, the lack of humility before nature that's being displayed here, uh... staggers me.",
	"Find Nedry! Check the vending machines!",
	"We spared no expense.",
	"Dodgson, Dodgson, we've got Dodgson here! See nobody cares.",
	"It's a UNIX system! I know this!",
	"Look... We can discuss sexism in survival situations when I get back.",
	"I am not a computer nerd. I prefer to be called a hacker!",
	"Clever girl",
	"Dino DNA",
	"Hello, John",
	"Yeah, but, John, if The Pirates of the Caribbean breaks down, the pirates don't eat the tourists.",
	"God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs.",
	"That doesn't look very scary. More like a six-foot turkey.",
	"What have they got in there, King Kong?",
	"Dr. Grant, my dear Dr. Sattler...Welcome to Jurassic Park.",
	"Well... we're back... in the car again.",
	"That is one big pile of shit.",
	"Remind me to thank John for a lovely weekend.",
	"We're gonna make a fortune with this place.",
	"I hate trees!",
	"You will remember to wash your hands before you eat anything?",
	"I really hate that man.",
	"You did it. You crazy son of a bitch, you did it.",
	"But again, how do you know they're all female? Does somebody go out into the park and pull up the dinosaurs' skirts?",
	"What's the matter, kid? You never had lamb chops?",

];

//Function that loads first quote on page load
$(document).ready(function() {
	$("#quote").html('<span class="quote">"</span>' + jpq.quotes[jpq.random()] + '<span class="quote">"</span>');
}); //END DOCUMENT READY

//Randomize quote picker
jpq.random = function() {
	return Math.floor(Math.random()*(jpq.quotes.length));
}

//On button click, fade out current quote and fade in next quote
$(function() {
	$(".button").on('click', function() {
		$("#quote").fadeOut(function() {
			$("#quote").fadeIn().html('<span class="quote">"</span>' + jpq.quotes[jpq.random()] + '<span class="quote">"</span>');
		});
	});
});

// RANDOMIZE IMAGES
var images = ['jpq-01.jpg', 'jpq-02.jpg', 'jpq-03.jpg'];
$('<img src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#easter-egg');

// FADE IN/OUT ON CLICK
$('a.hidden').on('click', function() {
	$('#easter-egg').fadeIn(500).fadeToggle(300);
}); // END ON CLICK

