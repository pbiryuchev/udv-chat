import { ThemeSwitcher } from '@/features/theme-switcher';

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeSwitcher />
      {children}
    </>
  );
}
