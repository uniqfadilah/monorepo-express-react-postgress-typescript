import { z, ZodType } from 'zod';

export class ClientValidation {
  static readonly CREATE_CLIENT: ZodType = z.object({
    name: z.string().min(1).max(100),
    phone: z.string().min(5).max(50),
    email: z.string().email(),
  });
}
