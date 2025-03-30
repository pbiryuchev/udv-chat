import { IMessage } from '@/shared/types';
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from '@/shared/ui';
import { useUserStore } from '@/entities/user';
import { useMessageTools } from '../model/hooks/useMessageTools';
import { useChatTools } from '../model/hooks/useChatTools';

type ChatMessateToolsProps = {
  message: IMessage;
  chatId: string;
};

export const ChatMessageTools = ({
  chatId,
  message,
}: ChatMessateToolsProps) => {
  const tools = useChatTools(chatId, message);
  const messageTools = useMessageTools(chatId, message);

  const user = useUserStore();

  const isOwner = user?.login === message.author;

  return (
    <ContextMenuContent>
      {tools.map(({ key, label, icon: Icon, onClick }) => (
        <ContextMenuItem
          key={key}
          className="cursor-pointer px-3"
          onClick={onClick}
        >
          <Icon className="h-[2rem] w-[2rem]" /> <span>{label}</span>
        </ContextMenuItem>
      ))}
      {isOwner && (
        <>
          <ContextMenuSeparator />
          {messageTools.map(({ key, label, icon: Icon, danger, onClick }) => (
            <ContextMenuItem
              key={key}
              variant={danger ? 'destructive' : 'default'}
              className="cursor-pointer px-3"
              onClick={onClick}
            >
              <Icon className="h-[2rem] w-[2rem]" /> <span>{label}</span>
            </ContextMenuItem>
          ))}
        </>
      )}
    </ContextMenuContent>
  );
};
