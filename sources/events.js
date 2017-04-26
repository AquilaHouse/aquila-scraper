/* Return an array of the latest events posted on the Aquila Google Sheet. */

require('dotenv').config(); // Save variables in a .env file so we don't make the spreadsheet public
googleSheets = require('google-spreadsheet');

var houseEvents = [];

var doc = new googleSheets(process.env.SHEET_KEY); // put this in .env
var creds = require(process.env.DRIVE_KEY_PATH);
doc.useServiceAccountAuth(creds, function() {
    doc.getInfo(function(err, info) {
        if (err) return console.log(err);
        sheet = info.worksheets[4]; // 5th sheet on the bottom tab thingy
        setInterval(function() {
            sheet.getRows({}, function(err, rows) {
                for (var i = 0; i < rows.length; i++) {
                    var e = rows[i];
                    houseEvents[i] = {
                        name: e.event,
                        day: e.day,
                        time: e.time,
                        location: e.location,
                        notes: e.notes
                    };
                    console.log(houseEvents);

                };
            });
        }, 10000); // Every 10 seconds
    });
});

/* In the format [{name: String, day: String, time: String, location: String, notes: String}, {...}, ...] */

module.exports = houseEvents;
