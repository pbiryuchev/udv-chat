'use client';

import dynamic from 'next/dynamic';

const JoinPage = dynamic(() => import('./join-page').then((m) => m.JoinPage), {
  ssr: false,
});

export const JoinPageDynamic = () => {
  return <JoinPage />;
};
