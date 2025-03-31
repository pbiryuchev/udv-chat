import { TQuote } from './quote.type';

export interface IMessage {
  id: string;
  author: string;
  content: string;
  date: string;

  images?: string[];
  quote?: TQuote;
}
