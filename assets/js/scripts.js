$(document).ready(function(){
// document.addEventListener( "DOMContentLoaded", function() {

var isPlaying = false;
var isMute = false;
var toggle = false;
var progressPercentage;
var currentTime;
var videoLength;
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
wrapper.src = "http://youtu.be/rOlMem0ykb4?t=12s"; // ferguson
// wrapper.src = "http://youtu.be/JEHm-XUHwNw"; // space
// wrapper.src = "http://youtu.be/8s3fEUuqP94"; // cooking
// wrapper.src = "http://youtu.be/5veKJJ4gnlk?t=3s"; // soccer
// wrapper.src = "https://www.youtube.com/watch?v=8WxWFDmYrWo#t=24"; // surgery
var pop = Popcorn( wrapper );
	// var pop = Popcorn( "#ourvideo" );
	


	function fadeIn() {
		$('p').addClass('darken');
		$('h1').addClass('darken');
		$("#ourvideo").addClass('selected');
		if (isMute) {
			console.log('muted!')
			pop.mute().play();
			updateProgressBar()
		} else {
			pop.play();		
			updateProgressBar()
		}
		// pop.loop('true');
	}

	function fadeOut() {
		$("#ourvideo").removeClass('selected');
		$('p').removeClass('darken');
		$('h1').removeClass('darken');
	    setTimeout(function(){
			pop.pause();
			$('#test1').css({
	            'background' : '-webkit-linear-gradient(left,  rgba(116, 192, 140, 1) ' + 0 + '%,  rgba(116, 192, 140, 0.4)' + 0 + '%)',
	            'background' : 'linear-gradient(to right,  rgba(116, 192, 140, 1) ' + 0 + '%,  rgba(116, 192, 140, 0.4)' + 0 + '%)'
				})		
	    },1000); 

		$('p').removeClass('darken');
		$('h1').removeClass('darken');

	}


	function updateProgressBar(action) {
		videoLength = pop.duration();
		pop.on('timeupdate', function( e ) {
			currentTime = pop.currentTime();
			progressPercentage = (currentTime/videoLength)*100;

			$('#test1').css({
	            'background' : '-webkit-linear-gradient(left,  rgba(116, 192, 140, 1) ' + progressPercentage + '%,  rgba(116, 192, 140, 0.4)' + (progressPercentage ) + '%)',
                'background' : 'linear-gradient(to right,  rgba(116, 192, 140, 1) ' + progressPercentage + '%,  rgba(116, 192, 140, 0.4)' + (progressPercentage ) + '%)'

			})
			if (progressPercentage > 60) {
				fadeOut();
	
			}


		});


	}
// popcorn media duration
// then run percentage
// popcorn eventlistener
// then apply css on percentage


// Clip.prototype.track_progress = function() {
//     var totalTime = this.end - this.start;
//     var position = this.sound_position();       // implement in subclass
//     var relative_position = position - this.start;
//     var percentage = (relative_position * 100) / totalTime;            
//     SOUNDCITE_CONFIG.update_playing_element(this.el, percentage);
// }


// update_playing_element: function(el, percentage) {
//     $(el).css({
//         'background' : '-webkit-linear-gradient(left,  rgba(189, 174, 100, 0.7) ' + percentage + '%,  rgba(189, 174, 100, 0.2)' + (percentage + 1) + '%)',
//         'background' : 'linear-gradient(to right,  rgba(189, 174, 100, 0.45) ' + percentage + '%,  rgba(189, 174, 100, 0.2)' + (percentage + 1) + '%)'
//     });
// }

// }, false);


// These are the options for the user

// Give the user the ability to change the speed of the fadeIn

// Give the user the ability to change the opacity of the video

// Give the user the ability to change the color of the highlight


// // SVG Inject

// var videoIcon = document.getElementById("videoIcon");
// document.addEventListener('DOMContentLoaded', function(){
// 	videoIcon.innerHTML = '
// <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="100px" height="100px" viewBox="5.0 -10.0 100.0 135.0" enable-background="new 0 0 100 100" xml:space="preserve">
// <g id="Captions">
// </g>
// <g id="Your_Icon">
// 	<g>
// 		<g>
// 			<path d="M49.72,35.093c-8.964,0-16.231,7.268-16.231,16.231s7.268,16.231,16.231,16.231s16.231-7.268,16.231-16.231     S58.684,35.093,49.72,35.093z M44.123,61.455V41.193l14.179,10.131L44.123,61.455z"/>
// 		</g>
// 		<g>
// 			<path d="M100,83.03c0,3.297-2.673,5.97-5.97,5.97H5.97C2.673,89,0,86.327,0,83.03V18.97C0,15.673,2.673,13,5.97,13H94.03     c3.297,0,5.97,2.673,5.97,5.97V83.03z M5,18v65h89.034L94.03,18H5z"/>
// 		</g>
// 	</g>
// </g></svg>';
// });

// var crossIcon = document.getElementById("crossIcon");
// document.addEventListener('DOMContentLoaded', function(){
// 	crossIcon.innerHTML = 'SVG Code Goes Here';
// });
});
