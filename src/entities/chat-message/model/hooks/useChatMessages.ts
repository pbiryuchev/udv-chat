import { useState, useEffect, useMemo } from "react";
import { useAtomValue } from "jotai";
import { getChatAtom } from "../store";

export const useChatMessages = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const messagesAtom = useMemo(() => getChatAtom(id), [id])
  const messages = useAtomValue(messagesAtom);

  useEffect(() => {
    if (messages !== undefined) {
      setIsLoading(false);
    }
  }, [messages]);

  return {
    messages,
    isLoading,
  };
};