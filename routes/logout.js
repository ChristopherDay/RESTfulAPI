module.exports = [
	{
		method: "GET", 
		path: "/logout", 
		callback: (req, res) => {
			/* DESTROY TOKEN */
			res.json({action: "logout"});
		}
	}
];