'use strict';

var server = require("./lib/server");
var config = require("./lib/config");
var routes = require("./lib/routes")((routes) => {
	console.log(routes);

	for (var i = 0; i < routes.length; i++) {
		var r = routes[i];
		server[r.method](r.path, r.callback);
	}

});
