houseEvents = require("./sources/events.js");
housePoints = require("./sources/points.js");

modular.exports = function() {
	return {events: houseEvents, points: housePoints };
}