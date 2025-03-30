'use client';

import { useAtomValue } from 'jotai';
import { ChatMessage, useChatMessages } from '@/entities/chat-message';
import { ChatSkeleton } from './messages-skeleton';
import { useUserStore } from '@/entities/user';
import { useChatScrolled } from '../hooks/useChatScrolled';
import { ChatMessageActions } from '@/features/chat-message-actions';
import { scrollToMessageAtom } from '@/entities/pinned-message/model/store';
import { useEffect } from 'react';

export const ChatMessages = ({ chatId }: { chatId: string }) => {
  const { messages, isLoading } = useChatMessages(chatId);
  const { containerRef } = useChatScrolled({ messages, isLoading });
  const user = useUserStore();
  const scrollTarget = useAtomValue(scrollToMessageAtom);

  useEffect(() => {
    if (
      !scrollTarget.messageId ||
      !scrollTarget.trigger ||
      !containerRef.current
    )
      return;

    const scrollToMessage = () => {
      const targetElement = containerRef.current?.querySelector(
        `[data-message-id="${scrollTarget.messageId}"]`
      );

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    const timer = setTimeout(scrollToMessage, 0);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollTarget.trigger]);

  return (
    <div
      ref={containerRef}
      className="flex-1 overflow-y-auto py-5 flex flex-col"
    >
      {isLoading ? (
        <ChatSkeleton />
      ) : (
        messages.map((message) => (
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
        ))
      )}
    </div>
  );
};
