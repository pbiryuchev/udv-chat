import { Avatar, AvatarFallback } from '@/shared/ui';
import { cn } from '@/shared/lib/utils';

type UserAvatarProps = {
  name: string;
  className?: string;
  size?: 'sm' | 'md';
};

const getSize = (size: UserAvatarProps['size'] = 'md') =>
  ({
    sm: 'size-8',
    md: 'size-12',
  })[size];

const getTextSize = (size: UserAvatarProps['size'] = 'md') =>
  ({
    sm: 'text-[13px]',
    md: 'text-[16px]',
  })[size];

export const UserAvatar = ({
  name,
  className,
  size = 'md',
}: UserAvatarProps) => {
  return (
    <Avatar className={cn(getSize(size), className)}>
      <AvatarFallback
        className={cn(
          'uppercase bg-blue-400 text-foreground',
          getTextSize(size)
        )}
      >
        {name.slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  );
};
