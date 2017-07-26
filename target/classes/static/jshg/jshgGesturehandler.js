var currentGesture = null;
var firstTime = true;
        
function JSHGToggle() {
	if (JSHG.isRunning()) {
		JSHG.delete();
		} else {
			JSHG.init({
				"actionCallback": actionMapper,
                "learnDivId": "learningShownHere",
                "gestureDivId": "gestureShownHere",
                "settings": {
                	"cameraWidth": 500, 
                    "cameraHeight": 400, 
                    "gestureDisplayWidth": 150, 
                    "gestureDisplayHeight": 130
                	}
			});
            JSHG.learnSkinColor(); 
            }
            firstTime = false;
}		

var actionMapper = function(gesture) {
	if (currentGesture != null && currentGesture.isSameRelativePos(gesture)){
		return;
		}

    if ( gesture.isLeft && (!gesture.isDown && !gesture.isUp) ){
        handleGesture('right');
       } 
            
    if ( gesture.isRight && (!gesture.isDown && !gesture.isUp) ){
        handleGesture('left');
       }
            
    if ( gesture.isDown && (!gesture.isLeft && !gesture.isRight) ){
        handleGesture('down');
       }
            
    if ( gesture.isUp && (!gesture.isLeft && !gesture.isRight) ){
        handleGesture('up');
       } 
            
    currentGesture = gesture;
    
}