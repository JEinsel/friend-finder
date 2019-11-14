var path = require("path");

module.exports = function(app) {
	app.get("/questionaire", function(request, res) {
		res.sendFile(path.join(__dirname, "../public/questionaire.html"));
	});
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
};