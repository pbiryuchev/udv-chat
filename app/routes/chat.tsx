import type { Route } from './+types/chat';

export function meta({ params }: Route.MetaArgs) {
  return [{ title: `Chat ${params.id}` }];
}

export default function Chat() {
  return <div>Chat Page</div>;
}
