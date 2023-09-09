import { Request, Response, NextFunction } from "express";

export const getProfileDetails = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { slack_name } = req.query;
  const { track } = req.query;

  // Get the current UTC time
  const currentUTC = new Date();

  // Validate that the current time is within +/-2 seconds of the desired format
  const allowedDifferenceInSeconds = 2;
  const desiredFormat = `${currentUTC.getUTCFullYear()}-${padZero(
    currentUTC.getUTCMonth() + 1
  )}-${padZero(currentUTC.getUTCDate())}T${padZero(
    currentUTC.getUTCHours()
  )}:${padZero(currentUTC.getUTCMinutes())}:${padZero(
    currentUTC.getUTCSeconds()
  )}Z`;
  const currentTimeInDesiredFormat = currentUTC.toISOString();
  const timeDifferenceInSeconds = Math.abs(
    (new Date(desiredFormat).getTime() - currentUTC.getTime()) / 1000
  );

  if (timeDifferenceInSeconds > allowedDifferenceInSeconds) {
    // The current time is outside the allowed range
    return res
      .status(500)
      .json({ error: "Current time is outside the allowed range" });
  }

  const slackProfile = {
    slack_name: slack_name,
    utc_time: currentTimeInDesiredFormat,
    track: track,
    github_file_url: `https://github.com/Bigben1200/ZuriProfile/blob/main/src/app.ts`,
    github_repo_url: `https://github.com/Bigben1200/ZuriProfile`,
    status_code: 200,
  };

  try {
    const formattedResponse = JSON.stringify(slackProfile, null, 2);
    res.set("Content-Type", "application/json");
    res.send(formattedResponse);
  } catch (error) {
    next(error);
  }
};

// Function to pad single digits with leading zeros
function padZero(num: number) {
  return num < 10 ? `0${num}` : num;
}
