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
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onClick", "javascript:Level2();");
	
	document.getElementById('level_title').innerHTML = 'Bekijk eerst de 2 filmpjes<br>(The Fall Of Erebor)<br>om het verhaal te starten.<br><br>(Niet verplicht)';
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
	opt1.innerHTML = 'Ga verder naar het verhaal';
	opt1.setAttribute("onclick", "javascript:Level3()");

	document.getElementById('level_title').innerHTML = 'In deze 2 filmpjes vertelt<br>de 111 jarige Bilbo over zijn<br>vroegere avonturen.';
	document.getElementById('level_video').style.display ='none';
	document.getElementById('level_video2').style.display ='block';


}

function Level3() {
	console.log("Level3()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level4()");

	document.getElementById('level_title').innerHTML = 'Vele jaren eerder zit de 51-jarige Bilbo Balings nietsvermoedend in zijn voortuin als de tovenaar Gandalf voorbijloopt en zegt op zoek te zijn naar iemand die mee wilt op een avontuur. Hoewel Bilbo hier niets voor voelt nodigt hij Gandalf uit om morgen op de thee te komen.';
	document.getElementById('level_image').src = 'img/meeting.jpg'
	document.getElementById('level_video2').style.display ='none';
}

function Level4() {
	console.log("Level4()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level5()");

	document.getElementById('level_title').innerHTML = 'Gandalf brengt tot Bilbos verbazing dertien Dwergen mee: Balin, Dwalin, Fili, Kili, Dori, Nori, Ori, Oin, Gloin, Bifur, Bofur, Bombur en Thorin Eikenschild, de kleinzoon van Thror.';
	document.getElementById('level_image').src = 'img/door.jpg';
}

function Level5() {
	console.log("Level5()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level6()");

	document.getElementById('level_title').innerHTML = ' Nu er al jaren niets meer van Smaug vernomen is acht Thorin de tijd rijp om terug te keren naar de Berg, al is het maar vanwege het risico dat anderen de Dwergen voor zouden kunnen zijn.';
	document.getElementById('level_image').src = 'img/party.jpg';
}

function Level6() {
	console.log("Level6()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level7()");

	document.getElementById('level_title').innerHTML = 'Gandalf wil Bilbo mee laten gaan als "inbreker", aangezien Hobbits sneller en stiller zijn dan Dwergen en dus kunnen helpen om de schat te stelen. Bovendien kent Smaug de geur van Hobbits nog niet.';
	document.getElementById('level_image').src = 'img/contract2.jpg';
}

function Level7() {
	console.log("Level7()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level8()");

	document.getElementById('level_title').innerHTML = 'Als Bilbo de volgende ochtend wakker wordt blijken de Dwergen vertrokken te zijn, met achterlating van een arbeidscontract voor Bilbo.';
	document.getElementById('level_image').src = 'img/think.jpg';
}

function Level8() {
	console.log("Level8()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level9()");

	document.getElementById('level_title').innerHTML = 'Na er lang over nagedacht te hebben besluit hij alsnog mee te gaan en gaat hen achterna.<br><a href="https://www.youtube.com/watch?v=0uQGKOss0-Q/"target="_blank">I am going on an adventure!</a>';
	document.getElementById('level_image').src = 'img/journey5.jpg';
}

function Level9() {
	console.log("Level9()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level10()");

	document.getElementById('level_title').innerHTML = 'Onderweg vertelt Balin hoe het met Thror is afgelopen. Bij een mislukte poging om Moria te heroveren is hij door de bleke ork Azog gedood. Thorin sloeg Azog vervolgens een arm af en zegt dat Azog aan zijn verwonding gestorven is.';
	document.getElementById('level_image').src = 'img/hoi.jpg';
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
