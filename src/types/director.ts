import { z, ZodSchema } from "zod";
import { movieSchema } from "./movie";

export const directorSchema: ZodSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(1),
  dateOfBirth: z.date(),
  movies: z.array(movieSchema).optional(),
  averageRating: z.number().optional(),
  isFavorite: z.boolean().default(false),
});

export type Director = z.infer<typeof directorSchema>;
