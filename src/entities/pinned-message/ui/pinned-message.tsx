'use client';

import { Button, Card } from '@/shared/ui';
import { usePinnedMessages } from '../model/hooks/usePinnedMessage';
import { formatTime } from '@/shared/lib/dayjs';
import { Pin, X } from 'lucide-react';
import { useChatActions } from '@/entities/chat-message';
import { usePinScroll } from '../model/hooks/usePinScroll';

export const PinnedMessage = ({ chatId }: { chatId: string }) => {
  const { unpinMessage } = useChatActions(chatId);
  const { pinnedMessage } = usePinnedMessages(chatId);
  const { handleClick } = usePinScroll(pinnedMessage?.id);

  if (!pinnedMessage) return null;

  return (
    <Card className="p-1 rounded-md mt-2 flex flex-row gap-2 items-center">
      <div
        onClick={handleClick}
        className="w-full cursor-pointer flex flex-row gap-2 hover:bg-muted/50 duration-150 rounded-md p-1"
      >
        <div className="size-10 flex justify-center items-center rounded-md">
          <Pin size={20} className="rotate-30" />
        </div>
        <div className="w-full">
          <div className="flex gap-1 items-center">
            <p className="text-muted-foreground text-sm font-semibold">
              {pinnedMessage.author}
            </p>
            <p className="text-muted-foreground text-[10px] text-end">
              {formatTime(pinnedMessage.date)}
            </p>
          </div>
          <p className="text-foreground text-sm line-clamp-1">
            {pinnedMessage.content}
          </p>
        </div>
      </div>
      <Button
        onClick={unpinMessage}
        variant="outline"
        size="icon"
        className="size-8 mr-2"
      >
        <X />
      </Button>
    </Card>
  );
};
