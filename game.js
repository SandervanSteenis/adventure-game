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

	document.getElementById('level_title').innerHTML = 'Onderweg vertelt Balin hoe het met Thror is afgelopen.';
	document.getElementById('level_image').src = 'img/balin.png';
}

function Level10() {
	console.log("Level10()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level11()");

	document.getElementById('level_title').innerHTML = 'Bij een mislukte poging om Moria te heroveren is hij door de bleke ork Azog onthoofd.';
	document.getElementById('level_image').src = 'img/hoofd.png';
}

function Level11() {
	console.log("Level11()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level12()");

	document.getElementById('level_title').innerHTML = 'Thorin sloeg Azog vervolgens een arm af en zegt dat Azog aan zijn verwonding gestorven is.';
	document.getElementById('level_image').src = 'img/arm.png';
}

function Level12() {
	console.log("Level12()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level13()");

	document.getElementById('level_title').innerHTML = 'Na een lange reis oostwaarts ontstaat er wrijving in het gezelschap en trekt Gandalf er alleen op uit.';
	document.getElementById('level_image').src = 'img/leaving.jpg';
}

function Level13() {
	console.log("Level13()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level14()");

	document.getElementById('level_title').innerHTML = 'Als de Dwergen hun kamp opslaan merken ze dat er ponys verdwenen zijn.';
	document.getElementById('level_image').src = 'img/stolen.jpg';
}

function Level14() {
	console.log("Level14()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level15()");

	document.getElementById('level_title').innerHTML = 'Fili, Kili en Bilbo ontdekken dat een drietal Trollen de ponys gestolen heeft om ze op te eten.';
	document.getElementById('level_image').src = 'img/trolls.jpg';
}

function Level15() {
	console.log("Level15()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level16()");

	document.getElementById('level_title').innerHTML = 'Als Bilbo de ponys probeert te bevrijden wordt hij echter gesnapt. De Dwergen proberen hem te redden maar zijn gedwongen hun wapens neer te leggen als de Trollen Bilbo dreigen te doden.';
	document.getElementById('level_image').src = 'img/trolls2.jpg';
}

function Level16() {
	console.log("Level16()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level17()");

	document.getElementById('level_title').innerHTML = 'Vervolgens willen de Trollen de Dwergen roosteren als maaltijd.';
	document.getElementById('level_image').src = 'img/roasting.jpg';
}

function Level17() {
	console.log("Level17()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level18()");

	document.getElementById('level_title').innerHTML = 'Bilbo rekt tijd door zich met hun kookkunst te bemoeien en te beweren dat Dwergen ongezond zijn. Hierdoor kan Gandalf terugkeren en een rots splijten, zodat de Trollen door de opkomende zon verstenen.';
	document.getElementById('level_image').src = 'img/stone.jpg';
}

function Level18() {
	console.log("Level18()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level19()");

	document.getElementById('level_title').innerHTML = 'Het gezelschap doorzoekt het schuilhol van de Trollen en ontdekt hier gestolen schatten, die ze begraven. Thorin neemt het Elfenzwaard genaamd Orcrist mee.';
	document.getElementById('level_image').src = 'img/orcrist.png';
}

function Level19() {
	console.log("Level19()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level20()");

	document.getElementById('level_title').innerHTML = 'En Gandalf vindt het Elfenzwaard genaamd Glamdring.';
	document.getElementById('level_image').src = 'img/glamdring.jpg';
}

function Level20() {
	console.log("Level20()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level21()");

	document.getElementById('level_title').innerHTML = 'Gandalf vindt nog een kleiner Elfenzwaard dat hij geeft aan Bilbo. Bilbo noemt het zwaard later "Sting".';
	document.getElementById('level_image').src = 'img/sting.jpg';
}

function Level21() {
	console.log("Level21()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level22()");

	document.getElementById('level_title').innerHTML = 'Vervolgens stuit de groep op Radagast, de Bruine Tovenaar uit het Demsterwold. Radagast vertelt Gandalf dat hij ongerust is over de toestand in zijn woud, waar steeds meer duisternis en ziekten toenemen.';
	document.getElementById('level_image').src = 'img/radagast.jpg';
}

function Level22() {
	console.log("Level22()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level23()");

	document.getElementById('level_title').innerHTML = 'Toen Radagast Dol Guldur bezocht werd hij door een vreemde geest aangevallen en ving hij een glimp op van een vreemde Geestenbezweerder. ';
	document.getElementById('level_image').src = 'img/radagast2.jpg';
}

function Level23() {
	console.log("Level23()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level24()");

	document.getElementById('level_title').innerHTML = ' Plotseling valt een groep Orks en Wargs de groep aan. Deze werken in opdracht van Azog, die het gevecht in Moria overleefd heeft en zich op Thorin wil wreken.';
	document.getElementById('level_image').src = 'img/chase.png';
}

function Level24() {
	console.log("Level24()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level25()");

	document.getElementById('level_title').innerHTML = 'Met behulp van Radagast en de door Gandalf gewaarschuwde Elfen slaagt het gezelschap erin te ontsnappen naar de verborgen vallei van Rivendel.';
	document.getElementById('level_image').src = 'img/rivendell.jpg';
}

function Level25() {
	console.log("Level25()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level26()");

	document.getElementById('level_title').innerHTML = 'Thorin accepteert de hulp van de Elfen niet van harte, aangezien de Boselfen van Thranduil de Dwergen in de steek gelaten hebben toen Smaug de Berg aanviel. Toch blijven de Dwergen enige tijd in het huis van Elrond, die speciale maanletters op de kaart ontdekt, die een nieuwe aanwijzing bieden naar een geheime deur in de Berg die maar eens per jaar ontdekt kan worden.';
	document.getElementById('level_image').src = 'img/table.jpg';
}

function Level26() {
	console.log("Level26()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level27()");

	document.getElementById('level_title').innerHTML = 'Ook ontdekt Elrond dat Gandalfs zwaard Glamdring is, het zwaard van de Elfenkoning van de verwoeste stad Gondolin. Thorins zwaard, Orcrist, komt daar ook vandaan.';
	document.getElementById('level_image').src = 'img/elrond.jpg';
}

function Level27() {
	console.log("Level27()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level28()");

	document.getElementById('level_title').innerHTML = 'De Witte Raad komt in Rivendel bijeen. Gandalf is van mening dat in Dol Guldur een duistere Geestenbezweerder aan het werk is, maar Elrond en Saruman zijn hier sceptisch over. Het zwaard van de geest die Radagast aanviel blijkt echter het zwaard van de Tovenaar-Koning van Angmar, die al dood had moeten zijn. Saruman meent echter dat de Geestenbezweerder een gewoon mens is. Aangezien de Raad niet volledig overtuigd is van het gevaar van Dol Guldur wordt de expeditie van Gandalf en Thorin niet goedgekeurd. Galadriel heeft echter door dat de Dwergen en Bilbo al stiekem vertrokken zijn.';
	document.getElementById('level_image').src = 'img/council.jpg';
}

function Level28() {
	console.log("Level28()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level29()");

	document.getElementById('level_title').innerHTML = 'Bilbo en de Dwergen zijn de Nevelbergen ingetrokken, maar raken daar in moeilijkheden als ze per ongeluk tussen vechtende Steenreuzen terechtkomen.';
	document.getElementById('level_image').src = 'img/giant.jpg';
}

function Level29() {
	console.log("Level29()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level30()");

	document.getElementById('level_title').innerHTML = 'De groep vlucht een grot in. Bilbo wilt terug naar Rivendell maar net als hij vertrekt komen ze terecht in een valluik en komen via een tunnel in Aardmannenstad.';
	document.getElementById('level_image').src = 'img/bilbo.jpg';
}

function Level30() {
	console.log("Level30()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level31()");

	document.getElementById('level_title').innerHTML = 'De Dwergen worden gevangengenomen door de Aardmannen, en worden gebracht naar de Grote Aardman.';
	document.getElementById('level_image').src = 'img/town.png';
}

function Level31() {
	console.log("Level31()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level32()");

	document.getElementById('level_title').innerHTML = 'Bilbo blijft per ongeluk achter in de grotten en raakt in gevecht met een Aardman. Samen storten ze neer in de grot.';
	document.getElementById('level_image').src = 'img/goblin.jpg';
}

function Level32() {
	console.log("Level32()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level33()");

	document.getElementById('level_title').innerHTML = 'De Aardman wordt gedood en meegenomen door Gollem, die hierbij een ring laat vallen. Met de ring in zijn zak loopt Bilbo Gollem tegen het lijf. Gollem kan niet beslissen of hij Bilbo wil helpen of opeten, dus daagt hij hem uit voor een raadselspel.';
	document.getElementById('level_image').src = 'img/riddles.jpg';
}

function Level33() {
	console.log("Level33()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level34()");

	document.getElementById('level_title').innerHTML = 'Ondertussen zijn de Dwergen voor de Grote Aardman geleid, die onthult dat Azog een prijs op Thorins hoofd heeft gezet. Als de Aardmannen de Dwergen willen gaan martelen verschijnt Gandalf ten tonele.';
	document.getElementById('level_image').src = 'img/arrives2.jpg';
}

function Level34() {
	console.log("Level34()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level35()");

	document.getElementById('level_title').innerHTML = 'De groep ontsnapt en Gandalf doodt de Grote Aardman, waarna ze naar de uitgang vluchten.';
	document.getElementById('level_image').src = 'img/goblinking3.png';
}

function Level35() {
	console.log("Level35()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level36()");

	document.getElementById('level_title').innerHTML = 'Bilbo heeft ondertussen het raadselspel gewonnen door te vragen wat hij in zijn zak heeft. Als Gollem merkt dat zijn ring kwijt is snapt hij dat Bilbo die heeft en wil hem aanvallen.';
	document.getElementById('level_image').src = 'img/gollum.jpg';
}

function Level36() {
	console.log("Level36()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga Verder';
	opt1.setAttribute("onclick", "javascript:Level37()");

	document.getElementById('level_title').innerHTML = 'De ring blijkt Bilbo echter onzichtbaar te maken. Gollem kan Bilbo niet vinden en gaat bij een uitgang zitten in de hoop hem te grijpen.';
	document.getElementById('level_image').src = 'img/invisible2.jpg';
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
