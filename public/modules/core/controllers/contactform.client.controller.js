'use strict';

angular.module('core').controller('ContactFormController', ['$scope', '$http',
	function($scope, $http) {
		var $cookies;
		angular.injector(['ngCookies']).invoke(function(_$cookies_) {
			$cookies = _$cookies_;
		});

		$scope.csrftoken = $cookies['XSRF-TOKEN'];
		$scope.submit = function(formData) {
			//Request
			$http.post('/email', {
					withCredentials: true
				}, $scope.formData)
				.success(function(data, status) {
					console.log('Sent ok');
				})
				.error(function(data, status) {
					console.log('Error');
				});
		};
	}
]);