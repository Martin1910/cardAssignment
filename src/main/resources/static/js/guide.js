app.controller('GuideCtrl', function($scope, $mdDialog, $interval) {

	$scope.showGuide = function(ev) {	
		
		$mdDialog.show({
			controller: GuideController,
			templateUrl: './template/guide_dialog.html',
			parent: angular.element(document.body),
			targetEvent: ev,
			clickOutsideToClose:true
		})
	};

	function GuideController($scope, $mdDialog) {
		
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}
});