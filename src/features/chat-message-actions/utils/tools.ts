import { Reply, PinOff, Pin, Copy, Pencil, Trash2 } from 'lucide-react';
import { IMessage } from '@/entities/chat-message';
import { ChatTools } from '../model/types';

export const getTools = (message: IMessage): ChatTools[] => [
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
    onClick: () => console.log('Копировать'),
  },
];

export const getMessageTools = (message: IMessage): ChatTools[] => [
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
    onClick: () => console.log('Удалить'),
  },
];
