import { ChatPageDynamic } from '@/routes/chat-page';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Chat ${id}`,
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <ChatPageDynamic id={id} />;
}
