// This is the slide mechanism


/*
First 
I get the images with one var that call the elements by tag name
R= bannerImages = [li, li, li, li, li];
*/

var bannerImages = document.getElementsByTagName("li");
var index = 0;

document.addEventListener('DOMContentLoaded' , function(){
	bannerImages[0].classList.add('go-visible');
});

function loopPlus(){
	removeClass();
	index = index + 1;
	if(index < bannerImages.length){
		addClass();
	} else {
		index = 0;
		addClass();
	}
}

function loopLess(){
	removeClass();
	index = index - 1;
	if(index < bannerImages.length && index >= 0){
		addClass();
	} else {
		index = bannerImages.length - 1;
		addClass();
	}
}

function addClass(){
	bannerImages[index].classList.add('go-visible');
}

function removeClass(){
	bannerImages[index].classList.remove('go-visible');
}

/*
for (var i = 0; i < bannerImages.length; i++){
            bannerImages[i].classList.add('change-display');
            console.log("ready");
        }

*/