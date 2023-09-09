"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileDetails = void 0;
const getProfileDetails = (req, res, next) => {
    const { slack_name } = req.query;
    const { track } = req.query;
    // Get the current day of the week
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const currentUTC = new Date();
    const currentDayOfWeek = daysOfWeek[currentUTC.getUTCDay()];
    const currentDateTimeISO = currentUTC.toISOString();
    const slackProfile = {
        slack_name: slack_name,
        current_day: currentDayOfWeek,
        utc_time: currentDateTimeISO,
        track: track,
        github_file_url: `https://github.com/Bigben1200/ZuriProfile/blob/main/src/app.ts`,
        github_repo_url: `https://github.com/Bigben1200/ZuriProfile`,
        status_code: 200,
    };
    try {
        const formattedResponse = JSON.stringify(slackProfile, null, 2);
        res.set("Content-Type", "application/json");
        res.send(formattedResponse);
    }
    catch (error) {
        next(error);
    }
};
exports.getProfileDetails = getProfileDetails;
