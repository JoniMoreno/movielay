import { z } from "zod";

export const healthCheckResponseSchema = z.object({
  status: z.number(),
  success: z.boolean().optional(),
  data: z.literal("I'm alive and kicking").optional(),
});
