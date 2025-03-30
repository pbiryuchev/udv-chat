import { useSetAtom } from 'jotai';
import { scrollToMessageAtom } from '../store';
import { useEffect } from 'react';

export const usePinScroll = (messageId?: string) => {
  const setScrollTarget = useSetAtom(scrollToMessageAtom);

  useEffect(() => {
    if (!messageId) return;
    setScrollTarget((prev) => ({ ...prev, messageId }));
  }, [messageId, setScrollTarget]);

  const handleClick = () => {
    if (!messageId) return;

    setScrollTarget((prev) => ({
      ...prev,
      trigger: prev.trigger + 1,
    }));
  };

  return { handleClick };
};
