'use strict';

angular.module('core').controller('HeaderController', ['$state', '$scope',
	function($state, $scope) {
		$scope.state = $state;
		$scope.camera_init = function() {
			$(document).ready(function() {
				setTimeout(function() {
					jQuery('.camera_wrap').camera({
						fx: 'random',
						loader: 'pie'
					});
					//console.log("ran camera_init");
				}, 0);
				window.setTimeout(function() {
					$scope.wow_init(1);
				}, 1750);
			});
		};
		$scope.wow_init = function(go) {
			$(document).ready(function() {
				if ($('html').hasClass('desktop')) {
					if(go === 1) {
						new WOW().init();
						console.log('wow init ran');
					}
				}
			});
		};
	}
]);