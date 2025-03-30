import { Pencil, Trash2 } from 'lucide-react';
import { useChatActions } from '@/entities/chat-message';
import { IMessage } from '@/shared/types';
import { ChatTools } from '../types';

export const useMessageTools = (
  chatId: string,
  message: IMessage
): ChatTools[] => {
  const { deleteMessage } = useChatActions(chatId);

  return [
    {
      key: 'edit',
      label: 'Редактировать',
      icon: Pencil,
      onClick: () => console.log(`Редактировать ${message.id}`),
    },
    {
      key: 'delete',
      label: 'Удалить',
      icon: Trash2,
      danger: true,
      onClick: () => deleteMessage(message.id),
    },
  ];
};
