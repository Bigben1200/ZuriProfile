import { Request, Response, NextFunction } from "express";

export const getProfileDetails = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { slack_name } = req.query;
  const { track } = req.query;

  // Function to pad single digits with leading zeros
  function padZero(num: number) {
    return num < 10 ? `0${num}` : num;
  }

  // Get the current UTC time
  const currentUTC = new Date();
  const utcYear = currentUTC.getUTCFullYear();
  const utcMonth = padZero(currentUTC.getUTCMonth() + 1); // Months are zero-indexed
  const utcDay = padZero(currentUTC.getUTCDate());
  const utcHours = padZero(currentUTC.getUTCHours());
  const utcMinutes = padZero(currentUTC.getUTCMinutes());
  const utcSeconds = padZero(currentUTC.getUTCSeconds());

  const currentDateTime = `${utcYear}-${utcMonth}-${utcDay}T${utcHours}:${utcMinutes}:${utcSeconds}Z`;

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
  const currentDayOfWeek = daysOfWeek[currentUTC.getUTCDay()];

  const slackProfile = {
    slack_name: slack_name,
    current_day: currentDayOfWeek,
    utc_time: currentDateTime,
    track: track,
    github_file_url: `https://github.com/Bigben1200/ZuriProfile/blob/main/src/app.ts`,
    github_repo_url: `https://github.com/Bigben1200/ZuriProfile`,
    status_code: 200,
  };

  try {
    res.send(slackProfile);
  } catch (error) {
    next(error);
  }
};
