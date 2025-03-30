import { atomWithStorage } from 'jotai/utils';
import { IMessage } from './message.interface';

const atomsCache = new Map<
  string,
  ReturnType<typeof atomWithStorage<IMessage[]>>
>();

export const getChatAtom = (id: string) => {
  if (!atomsCache.has(id)) {
    atomsCache.set(id, atomWithStorage<IMessage[]>(`chat-${id}`, []));
  }
  return atomsCache.get(id)!;
};
