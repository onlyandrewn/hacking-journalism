// On page load nav bar drops down to reveal itself

$().click(function(){
	$().slideDown("slow", function(){
	 // Animation complete
	});
});


// If the user clicks the switch, and toggles it on then add a class of "autoplay"

// When the user clicks on a piece of text, a video using Popcorn will fadeIn, just behind
// the text. It might need to alter the z-index of elements


$(function(){
	var videoPlaying = false;

	$('button').click(function(){
		console.log('Is this working?');
		if (videoPlaying === false) {
			console.log('How about now?');
			// fadeIn();
		} else {
			console.log('Nowwwww?');
			// fadeOut();
		}
	});
});

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



// document.addEventListener( "DOMContentLoaded", function() {
// 	var pop = Popcorn( "video" );

	// var targetText = $(document);

// 	targetText.click(function() {
// 		console.log('Hey, is this working?')
// 		if (videoPlaying == false) {
// 			console.log('test2')
// 			fadeIn();
// 		} else {
// 			fadeOut();
// 		}
// 	});

// 	function fadeIn() {
// 		pop.play();
// 	// video.loop = true;
// 	pop.fadeTo(5,.5);
// }

// 	function fadeOut() {
// 	pop.fadeTo(5,0);
// 	pop.pause();
// }
// }, false);