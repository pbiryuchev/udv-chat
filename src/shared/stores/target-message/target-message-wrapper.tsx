import { cn } from '@/shared/lib/utils';
import { useScrollTargetActions } from './store';

type TargetMessageWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export const TargetMessageWrapper = ({
  children,
  className,
  id,
}: TargetMessageWrapperProps) => {
  const { handleScroll } = useScrollTargetActions(id);

  return (
    <div
      onClick={handleScroll}
      className={cn(
        'w-full cursor-pointer flex flex-row gap-2 items-center hover:bg-muted/50 duration-150 rounded-md p-2 px-4',
        className
      )}
    >
      {children}
    </div>
  );
};
