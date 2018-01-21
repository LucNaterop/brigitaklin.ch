
$(function(){

	var images = ["images/bild1.gif", "images/bild2.gif", "images/bild3.gif", "images/bild4.gif", "images/bild5.gif", "images/bild6.gif", "images/bild7.gif", "images/bild8.gif"];

	function preload(arrayOfImages) {
		console.log('preloading...');
	    $(arrayOfImages).each(function(){
	        (new Image()).src = this;
	    });
	    console.log('done');
	}

	preload(images);

	$('#slideshow').css('background-image','url('+images[0] +')');
	var i = 1; 
	setInterval(function(){
		$('#slideshow').css('background-image','url('+images[i] +')');
		i++;
		if(i%images.length==0) i = 0;
	}, 4000);

});

