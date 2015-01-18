$(document).ready(function(){

	var isPlaying = false;
	var isMute = false;
	var toggle = false;
// On page load nav bar drops down to reveal itself
$("nav").slideDown("slow", function(){
   	 // Animation complete
   	});

// When the switch is clicked, active
$(".onoffswitch-switch").click(function(){
	if (isMute == false) {
		isMute = true;
		$(this).addClass("active")
	} else {
		isMute = false;
		$(this).removeClass("active")
	}
});

// When the user clicks on a piece of text, a video using Popcorn will fadeIn
$("#test1").click(function(){
	console.log(isPlaying)
	if (isPlaying == false) {
		fadeIn();
		isPlaying = true;

// Otherwise the video will fadeOut
} else {
	fadeOut();
	isPlaying = false;

}
});

var wrapper = Popcorn.HTMLYouTubeVideoElement( "#ourvideo" );
wrapper.src = "http://youtu.be/OS6duOoxctw?t=29s";
var pop = Popcorn( wrapper );

	// var pop = Popcorn( "#ourvideo" );
	function fadeIn() {
		$("#ourvideo").addClass('selected');
		if (isMute) {
			console.log('muted!')
			pop.mute().play();
		} else {
			pop.play();
		}
	// pop.loop('true');
}

function fadeOut() {
	$("#ourvideo").removeClass('selected');
	setTimeout(function(){
		pop.pause();
	},3000);
}
}, false);