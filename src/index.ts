import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { logger } from "./utils/logger";
import "dotenv/config";
import mongoose from "mongoose";
import healthRouter from "./routes/basic";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/healthcheck", healthRouter);

app.listen(process.env.PORT, () => {
  logger.info(`Listenning on http://localhost:${process.env.PORT}`);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("error", (error: Error) =>
  logger.error("an error while connecting to the db", error)
);
