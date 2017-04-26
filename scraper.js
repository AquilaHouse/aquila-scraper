require('dotenv').config(); // Save variables in a .env file so we don't make the spreadsheet public

houseEvents = require("./sources/events.js");
housePoints = require("./sources/points.js");

modular.exports = function() {
	return {events: houseEvents, points: housePoints };
}