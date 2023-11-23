import { Router, Request, Response } from "express";
import { logger } from "../utils/logger";

const healthRouter: Router = Router();

healthRouter.get("/healthcheck", async (req: Request, res: Response) => {
  try {
    logger.info("GET /healthcheck");
    await res.send("I'm alive and kicking!");
  } catch (error) {
    logger.error(error, "An error occured while health checking");
    res
      .status(500)
      .send("An internal server error occured - server isn't healthy");
  }
});

export default healthRouter;
