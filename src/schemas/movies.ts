import { z, ZodSchema } from "zod";
import { movieSchema } from "types/movie";

export const getByIdSchema: ZodSchema = z.object({
  params: z.object({
    id: z.string().min(1),
  }),
});

export const postSearchSchema: ZodSchema = z.object({
  body: movieSchema.partial(),
});
