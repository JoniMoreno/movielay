import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { logger } from "utils/logger";

dotenv.config();

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on("error", (error: Error) =>
  logger.error("an error while connecting to the db", error)
);
