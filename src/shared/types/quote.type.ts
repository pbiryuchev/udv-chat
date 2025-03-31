import { IMessage } from './message.interface';

export type TQuote = Pick<IMessage, 'id' | 'author' | 'content'>;
