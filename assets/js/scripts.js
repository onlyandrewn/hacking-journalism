$(document).ready(function(){

// On page load nav bar drops down to reveal itself
   $("nav").slideDown("slow", function(){
   	 // Animation complete
   	});
});

// When the switch is clicked, active
$("").click(function(){
	$(this).removeClass("").addClass("active")
});

// When the user clicks on a piece of text, a video using Popcorn will fadeIn

$("").click(function(){
	var videoPlaying = false;

	if (videoPlaying == false) {
		console.log("Is this working?");
		fadeIn();

// Otherwise the video will fadeOut
	} else {
		console.log("How about now?");
		fadeOut();
	}
});


document.addEventListener( "DOMContentLoaded", function() {
	var pop = Popcorn( "video" );

	var targetText = $(document);


	function fadeIn() {
		pop.play();
	// video.loop = true;
	pop.fadeTo(5,.5);
}

	function fadeOut() {
	pop.fadeTo(5,0);
	pop.pause();
}
}, false);


// These are the options for the user

// Give the user the ability to change the speed of the fadeIn

// Give the user the ability to change the opacity of the video

// Give the user the ability to change the color of the highlight


// SVG Inject

var videoIcon = document.getElementById("videoIcon");
document.addEventListener('DOMContentLoaded', function(){
	videoIcon.innerHTML = '
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="100px" height="100px" viewBox="5.0 -10.0 100.0 135.0" enable-background="new 0 0 100 100" xml:space="preserve">
<g id="Captions">
</g>
<g id="Your_Icon">
	<g>
		<g>
			<path d="M49.72,35.093c-8.964,0-16.231,7.268-16.231,16.231s7.268,16.231,16.231,16.231s16.231-7.268,16.231-16.231     S58.684,35.093,49.72,35.093z M44.123,61.455V41.193l14.179,10.131L44.123,61.455z"/>
		</g>
		<g>
			<path d="M100,83.03c0,3.297-2.673,5.97-5.97,5.97H5.97C2.673,89,0,86.327,0,83.03V18.97C0,15.673,2.673,13,5.97,13H94.03     c3.297,0,5.97,2.673,5.97,5.97V83.03z M5,18v65h89.034L94.03,18H5z"/>
		</g>
	</g>
</g></svg>';
});

var crossIcon = document.getElementById("crossIcon");
document.addEventListener('DOMContentLoaded', function(){
	crossIcon.innerHTML = 'SVG Code Goes Here';
});