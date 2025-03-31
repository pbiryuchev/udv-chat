'use client';

import { useRef, useState } from 'react';
import { ContextMenu, ContextMenuTrigger } from '@/shared/ui';
import { ChatMessageTools } from './chat-message-tools';
import { cn } from '@/shared/lib/utils';
import { IMessage } from '@/shared/types';

type ChatMessageActionsProps = {
  children: (handleOpen: () => void) => React.ReactNode;
  message: IMessage;
  chatId: string;
};

export const ChatMessageActions = ({
  children,
  message,
  chatId,
}: ChatMessageActionsProps) => {
  const [isOpen, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpen = (event?: React.MouseEvent) => {
    if (!triggerRef.current) return;

    const { left, top } = triggerRef.current.getBoundingClientRect();
    const customEvent = new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
      clientX: event ? event.clientX : left + 10,
      clientY: event ? event.clientY : top + 10,
    });

    triggerRef.current.dispatchEvent(customEvent);
  };

  return (
    <ContextMenu onOpenChange={setOpen}>
      <ContextMenuTrigger
        ref={triggerRef}
        className={cn('px-2 rounded-sm', isOpen && 'bg-message-hover')}
      >
        {children(handleOpen)}
      </ContextMenuTrigger>

      <ChatMessageTools chatId={chatId} message={message} />
    </ContextMenu>
  );
};
