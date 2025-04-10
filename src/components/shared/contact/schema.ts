import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type TContactSchema = z.infer<typeof contactSchema>;
