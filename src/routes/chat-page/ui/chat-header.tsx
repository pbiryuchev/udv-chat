'use client';

import { LogoutButton } from '@/features/logout-button';
import {
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui';

export const ChatHeader = ({ chatId }: { chatId: string }) => {
  return (
    <CardHeader className="flex justify-between items-center">
      <CardAction>
        <LogoutButton />
      </CardAction>
      <CardTitle>
        <span className="text-2xl">Комната: {chatId}</span>
      </CardTitle>
      <CardDescription>
        <h3 className="text-xl font-bold">UDV Chat</h3>
      </CardDescription>
    </CardHeader>
  );
};
