import { ReactNode } from 'react';

export type ButtonType = 'white' | 'black';

export interface ButtonProps {
  children: ReactNode;
  type: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}
