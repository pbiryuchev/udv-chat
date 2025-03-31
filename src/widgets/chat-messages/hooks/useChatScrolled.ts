import {
  useScrollTargetActions,
  useScrollTargetMessage,
} from '@/shared/stores';
import { IMessage } from '@/shared/types';
import { useRef, useEffect } from 'react';

type UseChatScrolledProps = {
  messages: IMessage[];
  isLoading: boolean;
};

export const useChatScrolled = ({
  messages,
  isLoading,
}: UseChatScrolledProps) => {
  const scrollTarget = useScrollTargetMessage();
  const { setScrollTarget } = useScrollTargetActions();
  const containerRef = useRef<HTMLDivElement>(null);
  const animateTimerRef = useRef<NodeJS.Timeout>(null);
  const prevContainerRef = useRef<HTMLElement>(null);
  const prevMessagesLength = useRef(messages.length);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
    });
  }, [isLoading]);

  useEffect(() => {
    if (!containerRef.current) return;

    const isNewMessage = messages.length > prevMessagesLength.current;

    if (isNewMessage) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }

    prevMessagesLength.current = messages.length;
  }, [messages, isLoading]);

  useEffect(() => {
    if (
      !scrollTarget.messageId ||
      !scrollTarget.trigger ||
      !containerRef.current
    )
      return;

    const scrollToMessage = () => {
      const targetElement = containerRef.current?.querySelector(
        `[data-message-id="${scrollTarget.messageId}"]`
      );

      prevContainerRef.current =
        targetElement?.closest(`[data-slot="context-menu-trigger"]`) ?? null;

      const containerElement = prevContainerRef.current;

      if (containerElement) {
        containerElement.classList.add('bg-message-hover');

        animateTimerRef.current = setTimeout(() => {
          containerElement.classList.remove('bg-message-hover');
          if (scrollTarget.messageId) {
            setScrollTarget({ messageId: null, trigger: 0 });
          }
        }, 3500);
      }

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    const timer = setTimeout(scrollToMessage, 0);

    return () => {
      clearTimeout(timer);
      if (animateTimerRef.current) {
        prevContainerRef.current?.classList.remove('bg-message-hover');
        clearTimeout(animateTimerRef.current);
      }
    };
  }, [scrollTarget.trigger, scrollTarget.messageId, setScrollTarget]);

  useEffect(() => {
    return () => {
      if (scrollTarget.messageId) {
        setScrollTarget({ messageId: null, trigger: 0 });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setScrollTarget]);

  return { containerRef };
};
