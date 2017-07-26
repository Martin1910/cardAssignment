$(document).ready(function(){
	const WAITING_TIME = 2000;
	const FIRST_CARD = 0;
	const LAST_CARD = $("md-card").length - 1;
	
	window.actualCard = undefined;
	window.direction = undefined;
	
	var cardElements = $("md-card");
	var moving = false;
	var showDialog = false;
	var timer;
	
	window.handleGesture = function(gesture){
		switch (gesture) {
		case 'right':
			if (!moving && actualCard === undefined){
				actualCard = 0;
				direction = 'right';
				startAssignmentToRight();
			}
			else if (!moving && !showDialog){
				moving = true;
				if (direction === 'left'){
					actualCard += 2;
				}
				direction = 'right';
				moveAssignmentToRight();
			} else if (moving && direction === 'left'){
				moving = false;
				stopAssignment();
			}
			break;
			
		case 'left':
			if (!moving && actualCard === undefined){
				actualCard = 5;
				direction = 'left';
				startAssignmentToLeft();
			} else if (!moving && !showDialog){
				moving = true;
				if (direction === 'right'){
					actualCard -= 2;
				}
				direction = 'left';
				moveAssignmentToLeft();
			} else if (moving && direction === 'right'){
				moving = false;
				stopAssignment();
			}
			break;
			
		case 'down':
			if (!moving && !showDialog && actualCard !== undefined){
				angular.element(document.getElementById('dialogCtrl')).scope().showAdvanced();
				showDialog = true;
			}
			break;
			
		case 'up':
			if (showDialog){
				angular.element(document.getElementById('dialogCtrl')).scope().cancel();
				showDialog = false;
			} else if (moving){
				moving = false;
				stopAssignment();
			}
		}
	}
	
	function startAssignmentToRight(){
		moving = true;
		cardElements.first().css('box-shadow', '0px 0px 13px 8px rgba(35, 173, 255, 1)');
		actualCard++;
		moveAssignmentToRight();
	}
	
	function moveAssignmentToRight(){
		timer = setInterval(function(){
			if (actualCard > cardElements.length - 1){
				stopAssignment();
				actualCard = 0;
				cardElements.last().css('box-shadow', '');
				startAssignmentToRight();
			}else{
				assignmentCard(actualCard);
				actualCard++;
			}
		}, WAITING_TIME);
	}
	
	function startAssignmentToLeft(){
		moving = true;
		cardElements.last().css('box-shadow', '0px 0px 13px 8px rgba(35, 173, 255, 1)');
		actualCard--;
		moveAssignmentToLeft();
	}
	
	function moveAssignmentToLeft(){
		timer = setInterval(function(){
			if (actualCard < 0){
				stopAssignment();
				actualCard = 5;
				cardElements.first().css('box-shadow', '');
				startAssignmentToLeft();
			}else{
				assignmentCard(actualCard);
				actualCard--;
			}
		}, WAITING_TIME);
	}
	
	function assignmentCard(cardIndex){
		cardElements.eq(cardIndex).css('box-shadow', '0px 0px 13px 8px rgba(35, 173, 255, 1)');
		if (direction === 'right') {
			cardElements.eq(cardIndex - 1).css('box-shadow', '');
		} else {
			cardElements.eq(cardIndex + 1).css('box-shadow', '');
		}
	}
	
	function stopAssignment(){
		clearInterval(timer);
		moving = false;
	}
	
	window.reset = function (){
		if ( direction === "right"){
			cardElements.eq(actualCard - 1).css('box-shadow', '');
		} else if ( direction === "left"){
			cardElements.eq(actualCard + 1).css('box-shadow', '');
		}
		stopAssignment();
		showDialog = false;
		actualCard = undefined;
		direction = undefined;
	}
	
});