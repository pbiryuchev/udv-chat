import { Card } from '@/shared/ui';
import { ChatContent } from './chat-content';
import { ChatHeader } from './chat-header';

export const ChatPage = ({ id }: { id: string }) => {
  // TODO ChatID сделать через useContext
  return (
    <Card className="max-w-250 h-[calc(100svh-100px)] gap-3 relative mx-auto px-3 pb-3 bg-accent">
      <ChatHeader chatId={id} />
      <ChatContent chatId={id} />
    </Card>
  );
};
