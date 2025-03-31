import { formatTime } from '@/shared/lib/dayjs';
import { cn } from '@/shared/lib/utils';
import { IMessage } from '@/shared/types';

type MessageProps = {
  message: IMessage;
  showAuthor: boolean;
  className?: string;
};

export const Message = ({ message, showAuthor, className }: MessageProps) => (
  <div
    className={cn(
      'relative bg-accent px-3 py-1 rounded-md min-w-[160px] max-w-[320px] text-clip break-all border-[1px]',
      className
    )}
  >
    {showAuthor && (
      <p className="text-muted-foreground text-sm">{message.author}</p>
    )}

    <p className="text-foreground text-sm pt-1">{message.content}</p>
    <p className="text-muted-foreground text-xs text-end">
      {formatTime(message.date)}
    </p>
  </div>
);
