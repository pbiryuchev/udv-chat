'use client';

import { Pin, X } from 'lucide-react';
import { Button, Card } from '@/shared/ui';
import { usePinnedMessages } from '../model/hooks/usePinnedMessage';
import { formatTime } from '@/shared/lib/dayjs';
import { useChatActions } from '@/entities/chat-message';
import { TargetMessageWrapper } from '@/shared/stores';

export const PinnedMessage = ({ chatId }: { chatId: string }) => {
  const { unpinMessage } = useChatActions(chatId);
  const { pinnedMessage } = usePinnedMessages(chatId);

  if (!pinnedMessage) return null;

  return (
    <Card className="p-1 rounded-md mt-2 flex flex-row gap-2 items-center">
      <TargetMessageWrapper id={pinnedMessage.id}>
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
      </TargetMessageWrapper>
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
