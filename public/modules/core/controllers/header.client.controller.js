'use strict';

angular.module('core').controller('HeaderController', ['$state', '$scope',
	function($state, $scope) {
		$scope.state = $state;
		$scope.camera_init = function() {
			$(document).ready(function() {
				setTimeout(function(){
				jQuery('.camera_wrap').camera({fx:'random', loader:'pie', 'navigation':true});
				//console.log("ran camera_init");
				}, 0);
			});
		};
	}
]);