import { z } from "zod";

export const signUpDto = z.object({
  fullName: z.string().min(2, "Name must be at least 2 char"),
  email: z.email(),
  birthDate: z.date(),
  password: z.string().min(6, "password must be at least 6 char"),
});
