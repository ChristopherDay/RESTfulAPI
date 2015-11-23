var fs = require("fs");

module.exports = (callback) => {

	var routesPath = __dirname + "/../routes/";

	fs.readdir(routesPath, function (err, files) {
		var output = [];
		for (var i = 0; i < files.length; i++) {
			var tmp = require(routesPath + "/" + files[i]);
			tmp = tmp.map((obj) => {
				obj.method = obj.method.toLowerCase();
				return obj;
			});
			for (var obj in tmp) {
				output[output.length] = tmp[obj];
			}
		}

		callback(output);

	});

};