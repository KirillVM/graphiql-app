import { ReactElement } from 'react';

export interface AuthContextProps {
  children: ReactElement;
}

export interface AuthContextValue {
  userToken: string | null;
  signIn: (newToken: string, cb: () => void) => void;
  signOut: (cb: () => void) => void;
}