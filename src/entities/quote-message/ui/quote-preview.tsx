import { TQuote } from '@/shared/types';
import { useQuoteActions } from '../model/store';
import { Button } from '@/shared/ui';
import { X } from 'lucide-react';
import { QuoteMessage } from './quote-message';

type QuotePreviewProps = {
  quote: TQuote;
};

export const QuotePreview = ({ quote }: QuotePreviewProps) => {
  const { resetQuoteMessage } = useQuoteActions();

  return (
    <div className="flex gap-2 pb-1 items-center">
      <QuoteMessage quote={quote} />
      <Button
        onClick={resetQuoteMessage}
        variant="outline"
        size="icon"
        className="size-8 mr-2"
      >
        <X />
      </Button>
    </div>
  );
};
