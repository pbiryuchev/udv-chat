import { z } from 'zod';

export const MessageSchema = z.object({
  message: z
    .string()
    .min(1, { message: 'Пожалуйста, введите сообщение.' })
    .max(1000, {
      message: 'Сообщение не должно превышать 1000 символов.',
    }),
});

export type MessageType = z.infer<typeof MessageSchema>;
