'use strict';

/**
 * Module dependencies.
 */
var email = require('../../app/controllers/email.server.controller');
var core = require('../../app/controllers/core.server.controller');

module.exports = function(app) {
	// Root routing
	
	app.route('/').get(core.index);
	
	// Email Routes
	app.route('/email')
		.post(email.send);
};