import { atom, useAtomValue, useSetAtom } from 'jotai';
import { IMessage } from '@/shared/types';

export const quoteMessageAtom = atom<IMessage | null>(null);

export const useQuoteMessage = () => useAtomValue(quoteMessageAtom);

export const useQuoteActions = () => {
  const setQuote = useSetAtom(quoteMessageAtom);
  return {
    setQuoteMessage: (message: IMessage) => setQuote(message),
    resetQuoteMessage: () => setQuote(null),
  };
};
