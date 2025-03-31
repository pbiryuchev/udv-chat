import { cn } from '@/shared/lib/utils';
import { TargetMessageWrapper } from '@/shared/stores';
import { TQuote } from '@/shared/types';

type QuoteMessageProps = {
  quote: TQuote;
  type?: 'message' | 'preview';
};

export const QuoteMessage = ({
  quote,
  type = 'preview',
}: QuoteMessageProps) => {
  return (
    <TargetMessageWrapper
      id={quote.id}
      className={cn({
        'p-1 px-2 hover:bg-card/40 rounded-sm': type === 'message',
      })}
    >
      <div className="w-[7px]">
        <div className="h-[34px] w-[2px] rounded-4xl bg-muted-foreground" />
      </div>
      <div className="w-full">
        <div className="flex gap-1 items-center">
          <p className="text-muted-foreground text-sm font-semibold">
            {quote.author}
          </p>
        </div>
        <p className="text-foreground  text-xs line-clamp-1">{quote.content}</p>
      </div>
    </TargetMessageWrapper>
  );
};
