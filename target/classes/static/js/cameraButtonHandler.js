var objectdetectCamera = function(){
	var objectdetect = $("#objectdetect_button");
	
	if ( objectdetect.hasClass("running") ){
		objectdetect.text("START OBJECTDETECT");
		objectdetect.removeClass("running");
		reset();
		stop();
	} else {
		objectdetect.text("STOP OBJECTDETECT");
		objectdetect.addClass("running");
		autoplay();
	}
}

var jshgCamera = function(){
	var jshg = $("#jshg_button");
	
	if ( jshg.hasClass("running") ){
		jshg.text("START JSHG");
		jshg.removeClass("running");
		reset();
		JSHGToggle($())
	} else {
		jshg.text("STOP JSHG");
		jshg.addClass("running");
		JSHGToggle($())
	}
}