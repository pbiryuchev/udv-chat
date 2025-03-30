import { cn } from '@/shared/lib/utils';
import dayjs from 'dayjs';
import { IMessage } from '../model/message.interface';

type MessageProps = {
  message: IMessage;
  showAuthor: boolean;
  className?: string;
};

export const Message = ({ message, showAuthor, className }: MessageProps) => (
  <div
    className={cn(
      'relative bg-accent px-3 py-1 rounded-md min-w-[160px] max-w-[320px] text-clip border-[1px]',
      className
    )}
  >
    {showAuthor && (
      <p className="text-muted-foreground text-sm">{message.author}</p>
    )}

    <p className="text-foreground text-sm pt-1">{message.content}</p>
    <p className="text-muted-foreground text-xs text-end">
      {dayjs(message.date).format('HH:mm')}
    </p>
  </div>
);
