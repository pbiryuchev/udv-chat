import { Reply, PinOff, Pin, Copy } from 'lucide-react';
import { IMessage } from '@/entities/chat-message';
import { ChatTools } from '../types';
import { useCallback } from 'react';

export const useChatTools = (
  chatId: string,
  message: IMessage
): ChatTools[] => {
  const handleCopy = useCallback(
    () => navigator.clipboard.writeText(message.content),
    [message.content]
  );

  return [
    {
      key: 'send',
      label: 'Ответить',
      icon: Reply,
      onClick: () => console.log('Ответить'),
    },
    {
      key: 'pin',
      label: message.pinned ? 'Открепить' : 'Закрепить',
      icon: message.pinned ? PinOff : Pin,
      onClick: () => console.log('Закреп'),
    },
    {
      key: 'copy',
      label: 'Копировать текст',
      icon: Copy,
      onClick: handleCopy,
    },
  ];
};
