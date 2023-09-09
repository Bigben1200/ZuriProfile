import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import config from "./config";
import profileRoute from "./routes";

const { PORT } = config;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/", profileRoute);

app.listen(PORT || 2000, () => {
  const BUILD_PORT = PORT;
  console.log(
    `profile api is running at http://localhost:${BUILD_PORT}/api?slack_name=BensonEniola&track=backend`
  );
});

export default app;
