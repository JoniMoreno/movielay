import { AnyZodObject, ZodError } from "zod";
import { validationMiddlewaretype } from "types/validation";
import { NextFunction, Request, Response } from "express";
import { logger } from "utils/logger";

export const validateRequest: validationMiddlewaretype =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError)
        logger.error({ error: new Error(error.message) });
      return res.status(400).json({
        success: false,
        error: `Request validation error: ${error.message}`,
      });
    }
  };
export const validateResponse: validationMiddlewaretype =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: res.json,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError)
        logger.error({ error: new Error(error.message) });
      return res.status(400).json({
        success: false,
        error: `Response validation error: ${error.message}`,
      });
    }
  };
