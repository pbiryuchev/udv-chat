import { IMessage } from '@/entities/chat-message';
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from '@/shared/ui';
import { getMessageTools, getTools } from '../utils/tools';

export const ChatMessageTools = ({ message }: { message: IMessage }) => {
  return (
    <ContextMenuContent>
      {getTools(message).map(({ key, label, icon: Icon, onClick }) => (
        <ContextMenuItem
          key={key}
          className="cursor-pointer px-3"
          onClick={onClick}
        >
          <Icon className="h-[2rem] w-[2rem]" /> <span>{label}</span>
        </ContextMenuItem>
      ))}
      <ContextMenuSeparator />
      {getMessageTools(message).map(
        ({ key, label, icon: Icon, danger, onClick }) => (
          <ContextMenuItem
            key={key}
            variant={danger ? 'destructive' : 'default'}
            className="cursor-pointer px-3"
            onClick={onClick}
          >
            <Icon className="h-[2rem] w-[2rem]" /> <span>{label}</span>
          </ContextMenuItem>
        )
      )}
    </ContextMenuContent>
  );
};
