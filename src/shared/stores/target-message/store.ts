import { atom, useAtomValue, useSetAtom } from 'jotai';
import { throttle } from 'lodash';

export const scrollToMessageAtom = atom<{
  messageId: string | null;
  trigger: number;
}>({ messageId: null, trigger: 0 });

export const useScrollTargetActions = (messageId?: string) => {
  const setScrollTarget = useSetAtom(scrollToMessageAtom);

  const handleScroll = throttle(() => {
    if (!messageId) return;

    setScrollTarget((prev) => ({
      messageId,
      trigger: prev.trigger + 1,
    }));
  }, 500);

  return { handleScroll, setScrollTarget };
};

export const useScrollTargetMessage = () => useAtomValue(scrollToMessageAtom);
