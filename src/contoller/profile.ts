import { Request, Response, NextFunction } from "express";

export const getProfileDetails = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  // Create the UTC time in the specified format
  const currentDate = currentUTC.toISOString().slice(0, 19) + "Z";

  const slackProfile = {
    slack_name: slack_name,
    current_day: currentDayOfWeek,
    utc_time: currentDate,
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
