document.addEventListener("DOMContentLoaded", function () {
	document.getElementById('image_one').style.left   = '0px';
	document.getElementById('image_two').style.left   = '0px';
	document.getElementById('image_three').style.left = '0px';
	document.getElementById('image_four').style.left  = '0px';
	document.getElementById('image_five').style.left  = '0px';

    console.log("position left set");
  });


// function setLeftPosition() {
// 	document.getElementById('image_one').style.left   = '0px';
// 	document.getElementById('image_two').style.left   = '0px';
// 	document.getElementById('image_three').style.left = '0px';
// 	document.getElementById('image_four').style.left  = '0px';
// 	document.getElementById('image_five').style.left  = '0px';
// }

// setLeftPosition();


/* This function work with the left button, to make the movement of each div, 
changing the left position */


function moveThemLeft () {
	// var firstDiv, secondDiv, thirdDiv, fourthDiv, fifthDiv;
	var firstLeft, secondLeft, thirdLeft, fourthLeft, fifthLeft;
	var firstInter, secondInter, thirdInter, fourthInter, fifthInter;

	//The following variables read the left position for each div

	firstLeft  = document.getElementById('image_one').style.left;
	secondLeft = document.getElementById('image_two').style.left;
	thirdLeft  = document.getElementById('image_three').style.left;
	fourthLeft = document.getElementById('image_four').style.left;
	fifthLeft  = document.getElementById('image_five').style.left;

	// The following variables are created to get the inter value of the left position.

	firstInter   = parseInt(firstLeft.split('px')[0]);
	secondInter = parseInt(secondLeft.split('px')[0]);
	thirdInter  = parseInt(thirdLeft.split('px')[0]);
	fourthInter = parseInt(fourthLeft.split('px')[0]);
	fifthInter  = parseInt(fifthLeft.split('px')[0]);

	/* After we get the left inter value position, it is time to set the conditionals 
	to know if is nessesary to substract more numer values */

	if (firstInter == 0) {
		firstLeft = 816 + 'px';
		setFirstLeft(firstLeft);
		console.log('first ' + 'it was in 0');
	}else if(firstInter > 0){
		firstLeft = (firstInter - 204) + 'px';
		setFirstLeft(firstLeft);
		console.log('first ' + 'it was more than > 0');
	};

	if (secondInter == (-204)) {
		secondLeft = 612 + 'px';
		setSecondLeft (secondLeft);
		console.log('second ' + 'it was in 0');
	}else if(secondInter > (-204)){
		secondLeft = (secondInter - 204) + 'px';
		setSecondLeft (secondLeft);
		console.log('second ' + 'it was more than > 0');
	};

	if (thirdInter == (-408)) {
		thirdLeft = 408 + 'px';
		setThirdLeft (thirdLeft)
		console.log('third ' + 'it was in 0');
	}else if(thirdInter > (-408)){
		thirdLeft = (thirdInter - 204) + 'px';
		setThirdLeft (thirdLeft)
		console.log('third ' + 'it was more than > 0');
	};

	if (fourthInter == (-612)) {
		fourthLeft = 204 + 'px';
		setFourthLeft (fourthLeft)
		console.log('fourth ' + 'it was in 0');
	}else if(fourthInter > (-612)){
		fourthLeft = (fourthInter - 204) + 'px';
		setFourthLeft (fourthLeft)
		console.log('fourth ' + 'it was more than > 0');
	}; 

	if (fifthInter == (-816)) {
		fifthLeft = 0 + 'px';
		setfifthLeft (fifthLeft) 
		console.log('fifth ' + 'it was in 0');
	}else if(fifthInter > (-816)){
		fifthLeft = (fifthInter - 204) + 'px';
		setfifthLeft (fifthLeft)
		console.log('fifth ' + 'it was more than > 0'); 
	}; 
}

// Once we have the correct values to move the divs, we continue with 
// the functions that set this values for each div

	function setFirstLeft (position) {
		document.getElementById('image_one').style.left = position;
		console.log('set first position');
	}

	function setSecondLeft (position) {
		document.getElementById('image_two').style.left = position;
		console.log('set second position');
		secondLeft = position;
	}

	function setThirdLeft (position) {
		document.getElementById('image_three').style.left = position;
		console.log('set third position');
	}

	function setFourthLeft (position) {
		document.getElementById('image_four').style.left = position;
		console.log('set fourth position');
	}

	function setfifthLeft (position) {
		document.getElementById('image_five').style.left = position;
		console.log('set fifth position');
	}



