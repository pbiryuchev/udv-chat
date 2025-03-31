import { QuoteMessage } from '@/entities/quote-message';
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
      'relative bg-accent px-1 py-1 rounded-md min-w-[160px] max-w-[340px] text-clip break-words border-[1px]',
      className
    )}
  >
    {showAuthor && (
      <p className="text-muted-foreground text-sm px-2">{message.author}</p>
    )}

    {message.quote && <QuoteMessage type="message" quote={message.quote} />}
    <div className='px-2'>
      <p className="text-foreground text-sm pt-1">{message.content}</p>
      <p className="text-muted-foreground text-xs text-end">
        {formatTime(message.date)}
      </p>
    </div>
  </div>
);
