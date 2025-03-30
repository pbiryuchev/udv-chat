import { IMessage } from "@/entities/chat-message";
import { useRef, useEffect } from "react";

type UseChatScrolledProps = {
  messages: IMessage[];
  isLoading: boolean;
}

export const useChatScrolled = ({ messages, isLoading }: UseChatScrolledProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevMessagesLength = useRef(messages.length);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!isLoading && prevMessagesLength.current === 0) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
      });
    }

    const isNewMessage = messages.length > prevMessagesLength.current;

    if (isNewMessage) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }

    prevMessagesLength.current = messages.length;
  }, [messages, isLoading]);

  return { containerRef };
}