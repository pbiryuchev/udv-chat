import { getChatAtom } from '@/entities/chat-message/model/store';
import { useAtomValue } from 'jotai';
import { useMemo } from 'react';

export const usePinnedMessages = (chatId: string) => {
  const messagesAtom = useMemo(() => getChatAtom(chatId), [chatId]);
  const { pin } = useAtomValue(messagesAtom);

  return {
    pinnedMessage: pin,
  };
};
