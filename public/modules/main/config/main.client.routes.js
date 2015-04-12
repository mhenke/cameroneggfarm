'use strict';

//Setting up route
angular.module('main').config(['$stateProvider',
	function($stateProvider) {
		// Main state routing
		$stateProvider.
		state('gallery', {
			url: '/gallery',
			templateUrl: 'modules/main/views/gallery.client.view.html'
		}).
		state('privacy-policy', {
			url: '/privacy-policy',
			templateUrl: 'modules/main/views/privacy-policy.client.view.html'
		}).
		state('where-to-buy', {
			url: '/where-to-buy',
			templateUrl: 'modules/main/views/where-to-buy.client.view.html'
		}).
		state('contacts', {
			url: '/contacts',
			templateUrl: 'modules/main/views/contacts.client.view.html'
		}).
		state('products', {
			url: '/products',
			templateUrl: 'modules/main/views/products.client.view.html'
		}).
		state('about-us', {
			url: '/about-us',
			templateUrl: 'modules/main/views/about-us.client.view.html'
		});
	}
]);