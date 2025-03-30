import { atom } from 'jotai';

export const scrollToMessageAtom = atom<{
  messageId: string | null;
  trigger: number;
}>({ messageId: null, trigger: 0 });
