import { ZodType, z } from 'zod';

export class UserValidation {
  static readonly REGISTER: ZodType = z.object({
    username: z.string().min(5).max(99),
    password: z.string().min(5).max(99),
    email: z.string().email(),
  });
  static readonly LOGIN: ZodType = z.object({
    username: z.string().min(5).max(99),
    password: z.string().min(5).max(99),
  });
}
