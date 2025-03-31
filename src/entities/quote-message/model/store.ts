import { atom, useAtomValue, useSetAtom } from 'jotai';
import { TQuote } from '@/shared/types';

export const quoteMessageAtom = atom<TQuote | null>(null);

export const useQuoteMessage = () => useAtomValue(quoteMessageAtom);

export const useQuoteActions = () => {
  const setQuote = useSetAtom(quoteMessageAtom);
  return {
    setQuoteMessage: (message: TQuote) => setQuote(message),
    resetQuoteMessage: () => setQuote(null),
  };
};
