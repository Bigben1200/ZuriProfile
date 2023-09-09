"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileDetails = void 0;
const getProfileDetails = (req, res, next) => {
    const { slack_name } = req.query;
    const { track } = req.query;
    // Function to get the current UTC time in ISO 8601 format
    function getCurrentUTC() {
        const currentUTC = new Date().toISOString();
        return currentUTC;
    }
    // Getting current day of the week
    function getCurrentDayOfWeek() {
        const daysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const currentDayOfWeek = daysOfWeek[new Date().getUTCDay()];
        return currentDayOfWeek;
    }
    const slackProfile = {
        slack_name: slack_name,
        current_day: getCurrentDayOfWeek(),
        utc_time: getCurrentUTC(),
        track: track,
        github_file_url: `https://github.com/Bigben1200/SlackAPI/blob/main/src/app.ts`,
        github_repo_url: `https://github.com/Bigben1200/SlackAPI`,
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
