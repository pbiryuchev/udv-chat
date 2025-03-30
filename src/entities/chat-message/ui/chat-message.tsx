// components/chat-message.tsx
'use client';

import { useState } from 'react';
import { cn } from '@/shared/lib/utils';
import { UserAvatar } from '@/shared/ui';
import { IMessage } from '@/shared/types';
import { MessageToolsButton } from './message-tools-button';
import { Message } from './message';

type ChatMessageProps = {
  message: IMessage;
  isOwner: boolean;
  onToolsOpen?: () => void;
};

export const ChatMessage = ({
  message,
  isOwner,
  onToolsOpen,
}: ChatMessageProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('flex gap-3 py-2', isOwner && 'self-end flex-row-reverse')}
    >
      <UserAvatar name={message.author} size="sm" />

      <div className="relative">
        <Message message={message} showAuthor={!isOwner} />

        {onToolsOpen && (
          <MessageToolsButton
            position={isOwner ? 'left' : 'right'}
            isVisible={isHovered}
            onClick={onToolsOpen}
          />
        )}
      </div>
    </div>
  );
};
