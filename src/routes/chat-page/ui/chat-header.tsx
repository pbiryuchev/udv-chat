'use client';

import { useChatMessages } from '@/entities/chat-message';
import { LogoutButton } from '@/features/logout-button';
import {
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/shared/ui';
import { User } from 'lucide-react';

export const ChatHeader = ({ chatId }: { chatId: string }) => {
  const { users, isLoading } = useChatMessages(chatId);

  return (
    <CardHeader className="flex justify-between items-center">
      <CardAction>
        <LogoutButton />
      </CardAction>
      <div>
        <CardTitle className="flex flex-col gap-1">
          <span className="text-2xl font-bold">Комната: {chatId}</span>
        </CardTitle>
        <div className="h-6">
          {isLoading ? (
            <Skeleton className="w-[150px] h-full bg-message-hover rounded-sm" />
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <CardDescription>
                    <p className="line-clamp-1 max-w-[200px]">
                      {users.join(', ')}
                    </p>
                  </CardDescription>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-bold">Участники</p>
                  <ul>
                    {users.map((user) => (
                      <li className="flex items-center gap-1" key={user}>
                        <User size={12} /> {user}
                      </li>
                    ))}
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </CardHeader>
  );
};
