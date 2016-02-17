var imageContainer = document.getElementsByTagName("ul");
var controlMargin = 0;

function addMargin() {
	if(controlMargin >= 0 && controlMargin <= 1200){
		controlMargin = controlMargin + 400;
    	imageContainer[0].style.right= controlMargin + "px";
	} else {
		controlMargin = 0;
		imageContainer[0].style.right= controlMargin + "px";
	}
}

function substractMargin() {
	if (controlMargin >= 400 && controlMargin <= 1600){
		controlMargin = controlMargin - 400;
    	imageContainer[0].style.right= controlMargin + "px";
	} else {
		controlMargin = 1600;
    	imageContainer[0].style.right= controlMargin + "px";
	}
}