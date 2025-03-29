import { z } from 'zod';

export const JoinFormSchema = z.object({
  login: z
    .string({
      message: 'Пожалуйста, введите имя пользователя.',
    })
    .min(4, {
      message: 'Имя пользователя должно быть не менее 4 символов.',
    }),
  room: z
    .string({
      message: 'Пожалуйста, введите название комнаты.',
    })
    .min(1, {
      message: 'Пожалуйста, введите название комнаты.',
    }),
});

export type JoinFormType = z.infer<typeof JoinFormSchema>;
