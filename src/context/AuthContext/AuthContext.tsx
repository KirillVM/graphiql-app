import { createContext, useState } from 'react';
import { AuthContextValue, AuthContextProps } from './AuthContext.inerface';

export const AuthContext = createContext<AuthContextValue>(null!);

export const AuthProvider = ({ children }: AuthContextProps) => {
  // presumably checking the token in localStorage and if the token is valid and unexpired)
  const [userToken, setUserToken] = useState<string | null>('null');

  const signIn = (newToken: string, cb: () => void) => {
    setUserToken(newToken);
    cb();
  };
  const signOut = (cb: () => void) => {
    setUserToken(null);
    cb();
  };

  const value = { userToken, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
