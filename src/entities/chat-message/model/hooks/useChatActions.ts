import { useSetAtom } from 'jotai';
import { getChatAtom } from '../store';
import { IMessage } from '../..';

export const useChatActions = (id: string) => {
  const setMessages = useSetAtom(getChatAtom(id));

  const addMessage = (message: IMessage) => {
    setMessages(prev => [...prev, message]);
  };

  const deleteMessage = (messageId: string) => {
    setMessages(prev => prev.filter(m => m.id !== messageId));
  };

  const clearChat = () => {
    setMessages([]);
  };

  return { addMessage, deleteMessage, clearChat };
};