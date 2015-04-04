'use strict';

angular.module('core').controller('ContactFormController', ['$scope', '$http',
	function($scope, $http) {
		$scope.submit = function(formData) {
			//formData.name = name value
			//$scope.formData.name = name value
			//if pass in contactform
			//contactform.name.viewValue = name value
			$scope.myVar = 'Hello from contact form controller';
			
			//Request
			$http.post('/email', $scope.formData)
				.success(function(data, status) {
					console.log("Sent ok");
				})
				.error(function(data, status) {
					console.log("Error");
				})
		};
	}
]);