'use strict';

const WorldTime = require('../../domain/WorldTime');

module.exports = {

    SetTimeResponse (parsedBody) {
        const worldTime = new WorldTime(
            parsedBody.currentDateTime,
            parsedBody.dayOfTheWeek,
            parsedBody.timeZoneName);
        return worldTime;
    },
    SetHtml(worldTime) {
        var html = "";
        html = `<html><body><h1>WORLD CLOCK TIME: ${worldTime.timeZoneName}</h1><p><h2>It's ${worldTime.dayOfTheWeek}</h2></p><p>Current Time: ${worldTime.currentDateTime}</p></body></html>`;
        return html;
    }
}