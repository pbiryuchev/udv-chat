import { ChatPage } from '@/routes/chat';

type Params = { params: { id: string } };

export async function generateMetadata({ params }: Params) {
  return {
    title: `Chat ${params.id}`,
  };
}

export default function Page({ params }: Params) {
  return <ChatPage id={params.id} />;
}
