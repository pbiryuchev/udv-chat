import { useSetAtom } from 'jotai';
import { getChatAtom } from '../store';
import { IMessage } from '@/shared/types';

export const useChatActions = (id: string) => {
  const setMessages = useSetAtom(getChatAtom(id));

  const addMessage = (message: IMessage) => {
    setMessages((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      users: [...new Set([...prev.users, message.author])],
    }));
  };

  const deleteMessage = (messageId: string) => {
    setMessages((prev) => ({
      ...prev,
      messages: prev.messages.filter((m) => m.id !== messageId),
      pin: prev.pin?.id === messageId ? null : prev.pin,
    }));
  };

  const clearChat = () => {
    setMessages((prev) => ({ ...prev, messages: [] }));
  };

  const pinMessage = (message: IMessage) => {
    setMessages((prev) => ({ ...prev, pin: message }));
  };

  const unpinMessage = () => {
    setMessages((prev) => ({ ...prev, pin: null }));
  };

  return { addMessage, deleteMessage, clearChat, unpinMessage, pinMessage };
};
