'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('core').factory('Email', ['$resource',
	function($resource) {
		return $resource('email', {
			//articleId: '@_id'
		});
	}
]);