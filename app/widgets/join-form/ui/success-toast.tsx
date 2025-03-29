import { Avatar, AvatarFallback } from '~/shared/ui';
import type { JoinFormType } from '../schema';

type JoinSuccessToastProps = { data: JoinFormType };

export const JoinSuccessToast = ({ data }: JoinSuccessToastProps) => {
  return (
    <div className="flex gap-4 items-center h-full">
      <Avatar className="w-12 h-12">
        <AvatarFallback className="uppercase bg-blue-400 text-foreground text-[16px]">
          {data.login.slice(0, 2)}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="text-lg font-semibold">Добро пожаловать, {data.login}!</p>
        <p className="text-sm font-normal text-muted-foreground">
          Вы успешно вошли в комнату.
        </p>
      </div>
    </div>
  );
};
