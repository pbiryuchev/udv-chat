import { useRouter } from 'next/navigation';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import { useUserActions } from '@/entities/user';
import { Button } from '@/shared/ui';

type LogoutButtonProps = {
  label?: string;
  icon?: LucideIcon;
};

export const LogoutButton = ({
  label = 'Выйти',
  icon = ArrowLeft,
}: LogoutButtonProps) => {
  const { signOut } = useUserActions();
  const router = useRouter();
  const Icon = icon;

  const handleBack = () => {
    router.push('/');
    signOut();
  };

  return (
    <Button onClick={handleBack} variant={'outline'}>
      <Icon size={20} />
      {label}
    </Button>
  );
};
