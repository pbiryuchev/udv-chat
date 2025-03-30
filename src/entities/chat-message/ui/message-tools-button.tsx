import { Button } from '@/shared/ui';
import { cn } from '@/shared/lib/utils';
import { Ellipsis } from 'lucide-react';

type MessageToolsButtonProps = {
  position: 'left' | 'right';
  isVisible: boolean;
  onClick: () => void;
};

export const MessageToolsButton = ({
  position,
  isVisible,
  onClick,
}: MessageToolsButtonProps) => (
  <Button
    variant="outline"
    onClick={onClick}
    size="icon"
    className={cn(
      'absolute !bg-accent -bottom-2 size-6 rounded-full',
      'transition-transform duration-200 ease-in-out',
      {
        left: '-left-4',
        right: '-right-4',
      }[position],
      isVisible ? 'scale-100' : 'scale-0'
    )}
  >
    <Ellipsis className="h-4 w-4" />
  </Button>
);
