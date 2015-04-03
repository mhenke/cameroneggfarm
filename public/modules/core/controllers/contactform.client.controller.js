'use strict';

angular.module('core').controller('ContactFormController', ['$scope', '$http', 'Email',
	function($scope, $http, Email) {
		$scope.email = Email;
		$scope.submit = function(contactForm) {
			$scope.result = 'hidden';
			$scope.resultMessage;
			$scope.formData; //formData is an object holding the name, email, subject, and message
			$scope.submitButtonDisabled = false;
			$scope.submitted = false; //used so that form errors are shown only after the form has been submitted
			$scope.submit = function(contactform) {
				$scope.submitted = true;
				$scope.submitButtonDisabled = true;
				
			};
		};
	}
]);
