import { PinnedMessage } from '@/entities/pinned-message';
import { Card } from '@/shared/ui';
import { ChatForm } from '@/widgets/chat-form';
import { ChatMessages } from '@/widgets/chat-messages';

export const ChatContent = ({ chatId }: { chatId: string }) => {
  return (
    <Card className="p-2 pt-0 rounded-lg h-full flex flex-col gap-1 overflow-hidden relative">
      <PinnedMessage chatId={chatId} />
      <ChatMessages chatId={chatId} />
      <Card className="p-2 rounded-b-md">
        <ChatForm chatId={chatId} />
      </Card>
    </Card>
  );
};
