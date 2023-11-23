import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export type validationMiddlewaretype = (
  schema: AnyZodObject
) => (req: Request, res: Response, next: NextFunction) => Promise<any>;
