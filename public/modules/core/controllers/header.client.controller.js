'use strict';

angular.module('core').controller('HeaderController', ['$state', '$scope', 'Authentication', 'Menus',
	function($state, $scope, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};
		
		$scope.state = $state;
		$scope.pageTitle = $state.current.name;

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});
	}
]);