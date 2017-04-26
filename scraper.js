var restify = require('restify');
require('dotenv').config();

houseEvents = require("./sources/events.js");
housePoints = require("./sources/points.js");

var server = restify.createServer();
server.get('/events', function(req, res, next) {
	res.send(houseEvents);
});

server.listen(process.env.PORT || 8080);
