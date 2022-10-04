const contestants = document.querySelectorAll('.contestant') // selecting all in the class contestant, need . to state it is a class

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden') // do not need . as we used classList
	}else{
		alert("Wrong!");
	}
}
