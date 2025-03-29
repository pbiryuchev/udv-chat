import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/shared/ui';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex justify-center items-center pt-[5%]">
      <Card>
        <CardContent className='flex flex-col gap-2'>
          <CardTitle>
            <h2 className="text-rose-400 text-6xl font-bold text-center">
              404
            </h2>
          </CardTitle>
          <CardDescription>
            <p>Страница не найдена или недоступна.</p>
          </CardDescription>
          <Link href="/">
            <Button className='w-full'>На главную</Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
