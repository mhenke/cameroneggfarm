'use strict';

/**
 * Module dependencies.
 */
var email = require('../../app/controllers/email.server.controller');
var core = require('../../app/controllers/core.server.controller');

module.exports = function(app) {
	// Root routing
	
	app.route('/').get(core.index,email.send);
	
		// Article Routes
	app.route('/email')
		.get(email.send)
		.post(email.send);
};