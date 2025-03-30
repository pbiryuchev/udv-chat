import { PinOff, LucideIcon, Pin, Reply, Copy, Pencil, Trash2 } from 'lucide-react';
import { IMessage } from '@/entities/chat-message';
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from '@/shared/ui';

type ChatTools = {
  key: string;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  danger?: boolean;
};

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

export const ChatMessageTools = ({ message }: { message: IMessage }) => {
  return (
    <ContextMenuContent>
      {getTools(message).map(({ key, label, icon: Icon, onClick }) => (
        <ContextMenuItem
          key={key}
          className="cursor-pointer px-3"
          onClick={onClick}
        >
          <Icon className="h-[2rem] w-[2rem]" /> <span>{label}</span>
        </ContextMenuItem>
      ))}
      <ContextMenuSeparator />
      {getMessageTools(message).map(
        ({ key, label, icon: Icon, danger, onClick }) => (
          <ContextMenuItem
            key={key}
            variant={danger ? 'destructive' : 'default'}
            className="cursor-pointer px-3"
            onClick={onClick}
          >
            <Icon className="h-[2rem] w-[2rem]" /> <span>{label}</span>
          </ContextMenuItem>
        )
      )}
    </ContextMenuContent>
  );
};
