import { JoinForm } from '~/widgets/join-form';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '~/shared/ui';

export default function Join() {
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
}
