import { ReactNode } from 'react';

export interface ButtonLangProps {
  children: ReactNode;
  active: boolean;
  onChangeLang: () => void;
}
