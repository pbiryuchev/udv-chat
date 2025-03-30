'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Button,
  Form,
  FormField,
  FormItem,
  FormControl,
  Textarea,
  FormMessage,
} from '@/shared/ui';
import { Paperclip, SmilePlus, SendHorizontal } from 'lucide-react';
import { useUserStore } from '@/entities/user';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { MessageType, MessageSchema } from '../schema';
import { useChatActions } from '@/entities/chat-message';

const defaultValues = {
  message: '',
};

export const ChatForm = ({ chatId }: { chatId: string }) => {
  const router = useRouter();
  const { addMessage } = useChatActions(chatId);
  const user = useUserStore();

  const form = useForm<MessageType>({
    resolver: zodResolver(MessageSchema),
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit = (data: MessageType) => {
    if (!user) {
      const handleClick = () => {
        toast.dismiss(toastId);
        router.push('/join');
      };

      const toastId = toast.error('Вы не вошли в аккаунт.', {
        description: 'Чтобы отправить сообщение, войдите в аккаунт.',
        cancel: <Button onClick={handleClick}>Войти</Button>,
      });
      return;
    }

    addMessage({
      id: crypto.randomUUID(),
      content: data.message,
      author: user.login,
      date: new Date().toISOString(),
    });

    form.reset(defaultValues);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey) {
      event.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 items-end"
      >
        <div className="flex flex-col gap-1">
          <Button type="button" variant={'outline'} size={'icon'}>
            <Paperclip />
          </Button>
          <Button type="button" variant={'outline'} size={'icon'}>
            <SmilePlus />
          </Button>
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormMessage />
              <FormControl>
                <Textarea
                  placeholder="Сообщение"
                  className="max-h-30 self-start resize-none"
                  onKeyDown={handleKeyDown}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant={'outline'}
          className="size-12"
          size={'icon'}
        >
          <SendHorizontal />
        </Button>
      </form>
    </Form>
  );
};
