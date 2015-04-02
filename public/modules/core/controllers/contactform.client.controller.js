'use strict';

angular.module('main').controller('ContactFormController', ['$scope',
	function($scope) {
		$scope.result = 'hidden'
		$scope.resultMessage = 'Hi mike';
		$scope.formData; //formData is an object holding the name, email, subject, and message
		$scope.submitButtonDisabled = false;
		$scope.submitted = false; //used so that form errors are shown only after the form has been submitted

		$scope.submit = function() {
			var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
			sendgrid.send({
				to: 'henke.mike@gmail.com',
				from: 'henke.mike@gmail.com',
				subject: 'Hello World',
				text: 'My first email through SendGrid.'
			}, function(err, json) {
				if (err) {
					$scope.resultMessage = err;
					$scope.result = '';
					return console.error(err);
				}
				$scope.resultMessage = 'Congrats.';
				$scope.result = '';
				console.log(json);
			});
		};
	}
]);
