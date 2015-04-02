'use strict';


angular.module('main').controller('ContactFormController', ['$scope',
	function($scope) {
		
		$scope.result = 'hidden'
		$scope.resultMessage = 'Hi mike';
		$scope.formData; //formData is an object holding the name, email, subject, and message
		$scope.submitButtonDisabled = false;
		$scope.submitted = false; //used so that form errors are shown only after the form has been submitted

		$scope.submit = function() {
			
			
		};
	}
]);
