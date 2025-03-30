import { UserAvatar } from '@/shared/ui';
import type { JoinFormType } from '../schema';

type JoinSuccessToastProps = { data: JoinFormType };

export const JoinSuccessToast = ({ data }: JoinSuccessToastProps) => {
  return (
    <div className="flex gap-4 items-center h-full">
      <UserAvatar name={data.login} />
      <div>
        <p className="text-lg font-semibold">Добро пожаловать, {data.login}!</p>
        <p className="text-sm font-normal text-muted-foreground">
          Вы успешно вошли в комнату.
        </p>
      </div>
    </div>
  );
};
