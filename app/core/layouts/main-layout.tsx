import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from '~/features/theme-switcher';
import { Toaster } from '~/shared/ui';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" storageKey="ui-theme" defaultTheme="dark">
      <ThemeSwitcher />
      {children}
      <Toaster />
    </ThemeProvider>
  );
};
