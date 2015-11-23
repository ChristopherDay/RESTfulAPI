var express = require('express');
var app = express();

var bodyParser = require('body-parser')
	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}))

app.listen(8080);

module.exports = app;