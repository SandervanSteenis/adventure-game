// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Play Game';
document.getElementById('level_title').innerHTML = '';

var HasKey = false;

// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M


function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Start';
	opt1.setAttribute("onClick", "javascript:Level2();");

	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_image').src = "img/house.jpg";


	// only allow option 2 if user has a key in his inventory

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Level 1: optie 1';
	opt2.onclick = function(){
		if(HasKey){
			Level2();
		} else {
			alert('U dont haz key dumbass');
		}
	}

	var opt3 = document.getElementById('option3');

	opt3.onclick = function(){
		HasKey = true;
	}
} 

function Level2() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 2: optie 1';
	opt1.setAttribute("onclick", "javascript:Level3()");

	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_image').src = 'img/journey3.jpg';
}

function Level3()  {
	console.log("level3()");



	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_image').src = 'img/smaug.jpg';
}

//Background Audio

function bgAudio() {
  var audioElem = document.getElementById('bgaudio');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}

  var audio = document.getElementById("bgaudio");
  audio.volume = 0.1;

//Over Het Spel

var toggle  = document.getElementById("toggle");
var content = document.getElementById("content");

toggle.addEventListener("click", function(){
  content.classList.toggle("appear");
}, false);

