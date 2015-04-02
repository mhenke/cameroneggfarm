'use strict';

angular.module('core').factory('Email', [
	function() {
		// Email service logic
		this.sendEmail = function(menuId) {
			var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);
			sendgrid.send({
				to: 'example@example.com',
				from: 'other@example.com',
				subject: 'Hello World',
				text: 'My first email through SendGrid.'
			}, function(err, json) {
				if (err) {
					return console.error(err);
				}
				console.log(json);
			});
			return false;
		};

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);