'use strict';

angular.module('core').directive('map', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Map directive logic
				// ...

				element.text('this is the map directive');
			}
		};
	}
]);