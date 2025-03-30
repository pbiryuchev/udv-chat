import { LucideIcon } from 'lucide-react';

export type ChatTools = {
  key: string;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  danger?: boolean;
};
