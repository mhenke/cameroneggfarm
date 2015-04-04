'use strict';

/**
 * Module dependencies.
 */
var sendgrid_username   = process.env.SENDGRID_USERNAME;
var sendgrid_password   = process.env.SENDGRID_PASSWORD;

var sendgrid   = require('sendgrid')(sendgrid_username, sendgrid_password);
var email      = new sendgrid.Email();
/**
 * Send an email
 */
exports.send = function(req, res) {
	email.addTo('henke.mike@gmail.com'); // req.body.to
    email.setFrom(req.body.email); // req.body.from
    email.fromname = req.body.name;
    email.setSubject('Email from Cameron Egg Farm'); // req.body.subject
    email.setText(req.body.message); // req.body.text
    email.addHeader('X-Sent-Using', 'SendGrid-API');
    email.addHeader('X-Transport', 'web');

    sendgrid.send(email, function(err, json) {
    if (err) { 
    	console.error(err);
        return res.send(err.message);
    }
        console.log(json);
        res.send('Email Sent OK!!!!');
    });
};