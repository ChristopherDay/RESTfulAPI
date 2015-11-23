module.exports = [
	{
		method: "GET", 
		path: "/login/:username", 
		callback: (req, res) => {
			/* GET SALT */
			console.log("conn");
			res.json({salt: "1234567890123456"});
		}
	}, {
		method: "POST", 
		path: "/login/:username", 
		callback: (req, res) => {
			/* POST PASSWORD AND RETURN SUCCESS/FAIL */
			res.json({
				param: req.params, 
				post: req.body
			});
		}
	}
];