'use strict';

/**
 * Module dependencies.
 */
var email = require('../../app/controllers/email.server.controller');

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/').get(core.index);
	
		// Article Routes
	app.route('/email')
		.get(email.send)
		.post(email.send);
};