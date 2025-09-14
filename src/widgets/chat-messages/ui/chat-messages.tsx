'use client';

import { ChatMessage, useChatMessages } from '@/entities/chat-message';
import { ChatSkeleton } from './messages-skeleton';
import { useUserStore } from '@/entities/user';
import { useChatScrolled } from '../hooks/useChatScrolled';
import { ChatMessageActions } from '@/features/chat-message-actions';

export const ChatMessages = ({ chatId }: { chatId: string }) => {
  const { messages, isLoading } = useChatMessages(chatId);
  const { containerRef } = useChatScrolled({ messages, isLoading });
  const user = useUserStore();

  return (
    <div ref={containerRef} className="overflow-y-auto flex-1">
      {isLoading ? (
        <ChatSkeleton />
      ) : (
        <div className="flex flex-col py-5">
          {messages.map((message) => (
            <ChatMessageActions
              chatId={chatId}
              message={message}
              key={message.id}
            >
              {(open) => (
                <div data-message-id={message.id}>
                  <ChatMessage
                    onToolsOpen={open}
                    isOwner={message.author === user?.login}
                    message={message}
                  />
                </div>
              )}
            </ChatMessageActions>
          ))}
        </div>
      )}
    </div>
  );
};
