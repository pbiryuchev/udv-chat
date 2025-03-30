'use client';

import { ChatMessage, useChatMessages } from '@/entities/chat-message';
import { ChatSkeleton } from './messages-skeleton';
import { useUserStore } from '@/entities/user';
import { useChatScrolled } from '../hooks/useChatScrolled';

export const ChatMessages = ({ chatId }: { chatId: string }) => {
  const { messages, isLoading } = useChatMessages(chatId);
  const { containerRef } = useChatScrolled({ messages, isLoading });
  const user = useUserStore();

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto py-5 flex flex-col"
    >
      {isLoading ? (
        <ChatSkeleton />
      ) : (
        messages.map((message) => (
          <ChatMessage
            isOwner={message.author === user?.login}
            key={message.id}
            message={message}
          />
        ))
      )}
    </div>
  );
};
