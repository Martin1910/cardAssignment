var app = angular.module('dashboard', ['ngMaterial']);

app.factory('sharedText', function(){
	
	var text = [
		{
			avatar_img: "img/ic_stars_black_48px.svg",
			sub_title: 'Stars',
			title: 'New stars',
			value_today: 1,
			value_so_far: 9
			
		},
		{
			avatar_img: "img/ic_lightbulb_outline_black_48px.svg",
			sub_title: 'Ideas',
			title: 'New ideas',
			value_today: 5,
			value_so_far: 1
		},
		{
			avatar_img: "img/ic_report_problem_black_48px.svg",
			sub_title: 'Warnings',
			title: 'New warnings',
			value_today: 0,
			value_so_far: 1
		},
		{
			avatar_img: "img/ic_verified_user_black_48px.svg",
			sub_title: 'Protection',
			title: 'Protected users',
			value_today: 5,
			value_so_far: 4
		},
		{
			avatar_img: "img/ic_done_black_48px.svg",
			sub_title: 'Tasks',
			title: 'Done tasks',
			value_today: 1,
			value_so_far: 50
		},
		{
			avatar_img: "img/ic_work_black_48px.svg",
			sub_title: 'Workers',
			title: 'New workers',
			value_today: 6,
			value_so_far: 1
		}
	];
	
	return text;
});

app.component('card',{
	
	controller: function($scope, $element, sharedText){
		
		switch($element.index()){
		case 0:
			$scope.sharedText = sharedText[0];
			break;
		case 1:
			$scope.sharedText = sharedText[1];
			break;
		case 2:
			$scope.sharedText = sharedText[2];
			break;
		case 3:
			$scope.sharedText = sharedText[3];
			break;
		case 4:
			$scope.sharedText = sharedText[4];
			break;
		case 5:
			$scope.sharedText = sharedText[5];
		}	
		
	},
	
	template:
		`<div>
			<md-card>
				<md-card-header>
					<md-card-avatar>
						<md-icon class="md-avatar-icon" md-svg-icon={{sharedText.avatar_img}}/>
					</md-card-avatar>
					<md-card-header-text>
						<span class="md-title">DM Company</span>
						<span class="md-subhead">{{sharedText.sub_title}}</span>
					</md-card-header-text>
				</md-card-header>
				<md-card-title>
					<md-card-title-text>
						<span class="md-headline">{{sharedText.title}} today</span>
						<span class="md-subhead"><h1>{{sharedText.value_today}}</h1></span>
					</md-card-title-text>
				</md-card-title>
				<md-card-content>
					All: {{sharedText.value_today + sharedText.value_so_far}}
				</md-card-content>
			</md-card> 
		</div>`
});

app.controller('dialogController', function($scope, $mdDialog){
	$scope.showAdvanced = function(ev){
		$mdDialog.show({
			controller: DialogController,
			templateUrl: './template/card_dialog.html',
			parent: angular.element(document.body),
			targetEvent: ev
		});
	};
	
	$scope.cancel = function(){
		$mdDialog.cancel();
	};
	
	function DialogController($scope, $mdDialog, $window, sharedText) {
	    $scope.hide = function() {
	      $mdDialog.hide();
	    };

	    if ($window.direction === 'right'){
	    	$scope.sharedText = sharedText[$window.actualCard-1];
	    } 
	    if ($window.direction === 'left'){
	    	$scope.sharedText = sharedText[$window.actualCard+1];
	    }
	    
	  }	
});