import { IMessage } from "@/shared/types";

export interface IChat {
  messages: IMessage[];
  pin: IMessage | null;
  users: string[];
}
