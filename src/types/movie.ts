import { z, AnyZodObject } from "zod";
import { directorSchema } from "./director";

export const movieSchema: AnyZodObject = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  averageRating: z.number().max(10).optional(),
  directors: z.array(directorSchema).max(3).optional(),
});

export type Movie = z.infer<typeof movieSchema>;
