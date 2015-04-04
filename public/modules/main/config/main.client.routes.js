'use strict';

//Setting up route
angular.module('main').config(['$stateProvider',
	function($stateProvider) {
		// Main state routing
		$stateProvider.
		state('privacy-policy', {
			url: '/privacy-policy',
			templateUrl: 'modules/main/views/privacy-policy.client.view.html',
            pageTitle: 'Privacy Policy'
		}).
		state('where-to-buy', {
			url: '/where-to-buy',
			templateUrl: 'modules/main/views/where-to-buy.client.view.html',
            pageTitle: 'Where To Buy'
		}).
		state('contacts', {
			url: '/contacts',
			templateUrl: 'modules/main/views/contacts.client.view.html',
            pageTitle: 'Contacts'
		}).
		state('products', {
			url: '/products',
			templateUrl: 'modules/main/views/products.client.view.html',
            pageTitle: 'Products'
		}).
		state('about-us', {
			url: '/about-us',
			templateUrl: 'modules/main/views/about-us.client.view.html',
            pageTitle: 'About Us'
		});
	}
]);