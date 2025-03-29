import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui';
import { JoinForm } from '@/widgets/join-form';

export const JoinPage = () => {
  return (
    <main className="bg-background min-h-svh flex justify-center items-center">
      <Card className="w-120">
        <CardHeader>
          <CardTitle className="text-3xl">Добро пожаловать!</CardTitle>
          <CardDescription>
            Пожалуйста, введите имя пользователя и номер комнаты.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <JoinForm />
        </CardContent>
        <CardFooter>
          <CardDescription>
            Если комнаты не существует, то будет создана автоматически.
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
};
