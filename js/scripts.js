var jpq = {};

jpq.quotes = [
	"Because Grant's like me, he's a digger.",
	"That doesn't look very scary, more like a six-foot turkey.",
	"What the hell do you think you're doing in here?",
	"Ok, who's the jerk??",
	"I don't care for lawyers, do you?",
	"Dodgson, Dodgson, we've got Dodgson here!",
	"Nice hat. What're you trying to look like, a secret agent?",
	"I bring scientists, you bring a rock star.",
	"Yahoo.",
	"All major theme parks have delays.",
	"It's...it's a dinosaur",
	"We're gonna make a fortune with this place.",
	"Dr. Grant, my dear Dr. Sattler, Welcome...to Jurassic Park.",
	"You said you've got a T-rex?",
	"Hello John!",
	"Mr. DNA! Where did you come from?",
	"Bingo, Dino DNA!",
	"But again, how do you know they're all female? Does somebody go out into the park, and pull up the dinosaurs' skirts?",
	"Life, uh...finds a way",
	"You bred Raptors?",
	"Yes, well - who's hungry?",
	"We spared no expense.",
	"We'll have a coupon day or something.",
	"Gee, the lack of humility before nature that's being displayed here, uh, staggers me.",
	"You were meant to come down here and defend me against these characters, and the only one I've got on my side is the blood-sucking lawyer!",
	"They sure don't look like birds to me.",
	"Hold onto your butts.",
	"What have they got in there, King Kong?",
	"Dennis, our lives are in your hands and you've got butter-fingers?",
	"Thanks, Dad.",
	"God creates dinosaurs. God destroys dinosaurs. God creates man. Man destroys God. Man creates dinosaurs.",
	"Dinosaurs eat man, woman inherits the earth.",
	"What's the matter, kid? You never had lamb chops?",
	"Ah, now eventually you DO plan to have dinosaurs on your, on your dinosaur tour, right?",
	"I really hate that man.",
	"Dino...droppings? Droppings?",
	"Damn!",
	"That is one big pile of shit.",
	"She's, um, tenacious.",
	"You will remember to wash your hands before you eat anything?",
	"It could have been worse, John. A lot worse.",
	"Anybody want a soda or something?",
	"I'm always on the lookout for a future ex-Mrs. Malcolm.",
	"Find Nedry! Check the vending machines!",
	"What a complete slob!",
	"Why the hell would he turn the other ones off?",
	"Ah ah ah, you didn't say the magic word.",
	"Pleeease! Goddamnit, I hate this hacker crap!",
	"When you gotta go, you gotta go.",
	"Boy do I hate being right all the time.",
	"Turn the light off, turn the light off.",
	"Ian! Freeze!",
	"Don't move. He can't see us if we don't move.",
	"Robert, I..I wonder if perhaps you'd be good enough to take a gas jeep and bring back my grandchildren.",
	"John? John? I can't get Jurassic Park back online without Dennis Nedry.",
	"My glasses! I can afford more glasses.",
	"No wonder you're extinct. I'm gonna run you over when I come back down.",
	"Go, go, go, go, Tim, go!",
	"Well...we're back...in the car again.",
	"Remind me to thank John for a lovely weekend.",
	"I'm fairly alarmed here.",
	"Think they'll have THAT on the tour?",
	"Your scientists were so preoccupied with whether or not they could, they didn’t stop to think if they should.",
	"I hate trees.",
	"Faster, faster, must go faster!",
	"I am not a computer nerd. I prefer to be called a hacker!",
	"They're, uh, flocking this way.",
	"But John, if The Pirates of the Caribbean breaks down, the pirates don't eat the tourists.",
	"Look, we can discuss sexism in survival situations when I get back.",
	"...because we're being hunted.",
	"Clever girl.",
	"Big Tim, the human piece of toast.",
	"Unless they figure out how to open doors.",
	"It's a UNIX system. I know this.",
	"Tell 'em to send the damn helicopters.",
	"Mr. Hammond: after careful consideration, I've decided not to endorse your park."
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