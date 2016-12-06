// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Play Game';
document.getElementById('level_title').innerHTML = '';

var HasKey = false;

// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M

//Levels

function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Start';
	opt1.setAttribute("onClick", "javascript:Level2();");

	document.getElementById('level_title').innerHTML = 'Bekijk het filmpje<br>om het verhaal<br>te starten';
	document.getElementById('level_video').style.display ='block';


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
	opt1.innerHTML = 'Ga naar buiten';
	opt1.setAttribute("onclick", "javascript:Level3()");

	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_image').src = 'img/journey3.jpg';
	document.getElementById('level_video').style.display ='none';

}

function Level3() {
	console.log("Level3()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Hallo alles goed';
	opt1.setAttribute("onclick", "javascript:Level4()");

	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_image').src = 'img/smaug.jpg';
}

function Level4() {
	console.log("Level4()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Mooi he';
	opt1.setAttribute("onclick", "javascript:Level5()");

	document.getElementById('level_title').innerHTML = '';
	document.getElementById('level_image').src = 'img/rpg.png';
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
