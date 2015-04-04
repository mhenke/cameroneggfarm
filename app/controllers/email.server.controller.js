'use strict';

/**
 * Module dependencies.
 */
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

/**
 * Send an email
 */
exports.send = function(req, res, next) {
	sendgrid.send({
		to: 'henke.mike@gmail.com',
		from: 'henke.mike@gmail.com',
		subject: 'Hello World',
		text: 'My first email through SendGrid from c9.'
	}, function(err, json) {
		if (err) {
			console.error(err)
			return res.json(err);
		}
		console.log(json);
		res.json(json)
	});
};

/*
  if (!err) {
  	res.send({
  		message: 'An email has been sent to ' + user.email + ' with further instructions.'
  	});
  }
  done(err);
*/