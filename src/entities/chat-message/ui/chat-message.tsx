import { UserAvatar } from '@/shared/ui';
import { IMessage } from '../model/message.interface';
import { cn } from '@/shared/lib/utils';
import dayjs from 'dayjs';

type ChatMessageProps = {
  message: IMessage;
  isOwner: boolean;
};

const getTimeFormat = (date: string) => dayjs(date).format('HH:mm');

export const ChatMessage = ({ message, isOwner }: ChatMessageProps) => {
  return (
    <div className="hover:bg-message-hover px-2 rounded-sm">
      <div
        className={cn(
          'flex gap-3 py-2',
          isOwner && 'self-end flex-row-reverse'
        )}
      >
        <UserAvatar name={message.author} size="sm" />
        <div className="bg-accent px-3 py-1 rounded-md min-w-[160px] max-w-[320px] text-clip border-[1px]">
          {!isOwner && (
            <p className="text-muted-foreground text-sm">{message.author}</p>
          )}

          <p className="text-foreground text-sm pt-1">{message.content}</p>
          <p className="text-muted-foreground text-xs text-end">
            {getTimeFormat(message.date)}
          </p>
        </div>
      </div>
    </div>
  );
};
