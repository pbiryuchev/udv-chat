import { z } from 'zod';

export const MessageSchema = z.object({
  message: z
    .string()
    .min(1, { message: 'Пожалуйста, введите сообщение.' })
    .max(250, {
      message: 'Сообщение не должно превышать 250 символов.',
    }),
});

export type MessageType = z.infer<typeof MessageSchema>;
