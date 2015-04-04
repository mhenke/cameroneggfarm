'use strict';

angular.module('core').controller('ContactFormController', ['$scope', '$http', 'Email',
	function($scope, $http, Email) {
		$scope.submit = function(contactform) {
			$scope.myVar = 'Hello from contact form controller';
			$scope.teams = Email.get('email');
		};
	}
]);