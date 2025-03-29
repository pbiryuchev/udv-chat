'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui';
import { themes } from './themes';

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <div className="absolute p-4 flex justify-end w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="h-12 w-12">
            <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem disabled>Выберите тему</DropdownMenuItem>
          <DropdownMenuSeparator />
          {themes.map(({ key, label, icon: Icon }) => (
            <DropdownMenuItem
              key={key}
              className="cursor-pointer px-3"
              onClick={() => setTheme(key)}
            >
              <Icon className="h-[2rem] w-[2rem]" /> <span>{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
