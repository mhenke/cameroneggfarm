'use strict';

/**
 * Module dependencies.
 */
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

/**
 * Send an email
 */
exports.send = function(req, res) {
	sendgrid.send({
		to: 'henke.mike@gmail.com',
		from: 'henke.mike@gmail.com',
		subject: 'Hello World',
		text: 'My first email through SendGrid.'
	}, function(err, json) {
		if (err) {
			return console.error(err);
		}
		console.log(json);
	});
};