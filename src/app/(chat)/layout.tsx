import { ThemeSwitcher } from '@/features/theme-switcher';

export default function ShellLayout({
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
