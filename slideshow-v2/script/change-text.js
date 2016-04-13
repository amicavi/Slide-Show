
var counter = 1;
console.log(counter);

function addOne() {
	if (counter < 5) {
		counter++;
	}else{
		counter = 1;
	};
	console.log(counter);
	changeText(counter);
}

function substractOne() {
	if (counter > 1 && counter <= 5) {
		--counter;
	}else{
		counter = 5
	};
	console.log(counter);
	changeText(counter);
}

document.addEventListener("DOMContentLoaded", function () {
	var box = document.getElementById('box');
})



function changeText (number) {
	switch(number){
		case 1 :
		box.innerHTML = "<p>First text</p>";
		break;
		case 2 :
		box.innerHTML = "<p>Second text</p>";
		break;
		case 3 :
		box.innerHTML = "<p>Third text</p>";
		break;
		case 4 :
		box.innerHTML = "<p>Fourth text</p>";
		break;
		case 5 :
		box.innerHTML = "<p>Fifth text</p>";
		break;
	}
}