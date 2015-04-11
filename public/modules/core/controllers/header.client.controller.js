'use strict';

angular.module('core').controller('HeaderController', ['$state', '$scope',
	function($state, $scope) {
		$scope.state = $state;
		$scope.pageTitle = $state.current.name;
	}
]);