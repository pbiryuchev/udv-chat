'use client';

import dynamic from 'next/dynamic';

const ChatPage = dynamic(() => import('./chat-page').then((m) => m.ChatPage), {
  ssr: false,
});

export const ChatPageDynamic = ({ id }: { id: string }) => {
  return <ChatPage id={id} />;
};
