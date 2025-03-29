import {
  type RouteConfig,
  index,
  route,
} from '@react-router/dev/routes';

export default [
  index('./routes/join.tsx', { id: 'join-index' }),
  route('/join', './routes/join.tsx'),
  route('/chat/:id', './routes/chat.tsx'),
] satisfies RouteConfig;
