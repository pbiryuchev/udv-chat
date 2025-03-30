import { atomWithStorage } from 'jotai/utils';
import { IChat } from './chat.interface';

const atomsCache = new Map<string, ReturnType<typeof atomWithStorage<IChat>>>();

export const getChatAtom = (id: string) => {
  if (!atomsCache.has(id)) {
    atomsCache.set(
      id,
      atomWithStorage<IChat>(`chat-${id}`, {
        messages: [],
        pin: null,
        users: [],
      })
    );
  }
  return atomsCache.get(id)!;
};
