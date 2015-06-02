var jpq = {};

jpq.quotes = [
	"When you gotta go, you gotta go.",
	"Hold onto your butts.",
	"God help us, we're in the hands of engineers.",
	"Gee, the lack of humility before nature that's being displayed here, uh...staggers me.",
	"Find Nedry! Check the vending machines!",
	"We spared no expense.",
	"Dodgson, Dodgson, we've got Dodgson here!",
	"It's a UNIX system! I know this!",
	"Look...we can discuss sexism in survival situations when I get back.",
	"I am not a computer nerd. I prefer to be called a hacker!",
	"Clever girl.",
	"Mr. DNA! Where did you come from?",
	"Hello, John.",
	"Yeah, but, John, if The Pirates of the Caribbean breaks down, the pirates don't eat the tourists.",
	"God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs.",
	"Dinosaurs eat man. Woman inherits the earth...",
	"That doesn't look very scary. More like a six-foot turkey.",
	"What have they got in there? King Kong?",
	"Dr. Grant, my dear Dr. Sattler, welcome to Jurassic Park.",
	"Well...we're back...in the car again.",
	"That is one big pile of shit.",
	"Remind me to thank John for a lovely weekend.",
	"We're gonna make a fortune with this place.",
	"I hate trees!",
	"You will remember to wash your hands before you eat anything?",
	"I really hate that man.",
	"You did it. You crazy son of a bitch, you did it.",
	"But again, how do you know they're all female? Does somebody go out into the park and pull up the dinosaurs' skirts?",
	"What's the matter, kid? You never had lamb chops?",
	"We’ll have a coupon day or something.",
	"Unless they figure out how to open doors.",
	"Dennis, our lives are in your hands and you've got butter-fingers?",
	"I hate being right all the time.",
	"I'm always on the lookout for the future ex-Mrs. Malcolm.",
	"Ah, now eventually you do plan to have dinosaurs on your, on your dinosaur tour, right?",
	"You were meant to come down here and defend me against these characters, and the only one I've got on my side is the blood-sucking lawyer!",
	"I bring scientists, you bring the rock star."
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
jpq.images = ['jpq-01.jpg', 'jpq-02.jpg', 'jpq-03.jpg', 'jpq-04.jpg', 'jpq-05.jpg', 'jpq-06.jpg', 'jpq-07.jpg', 'jpq-08.jpg', 'jpq-09.jpg'];
var number = jpq.images[Math.floor(jpq.images.length * Math.random())];

jpq.number = function() {
	return Math.floor(Math.random()*(jpq.images.length));
}

// Creation of Image Element within Easter-Egg ID
window.onload=function(){
	var imageCreation = document.createElement("img");
	imageCreation.setAttribute('src', 'img/' + jpq.images[jpq.number()]);
	document.getElementById("easter-egg").appendChild(imageCreation);
}

// FADE IN/OUT ON CLICK, switching image source randomly from array
$('a.hidden').on('click', function() {
  $('#easter-egg').addClass('show').delay(1500).queue(function(next){
       $(this).removeClass('show');
       next();
  });
	$("#easter-egg img").attr('src', 'img/' + jpq.images[jpq.number()]);
})