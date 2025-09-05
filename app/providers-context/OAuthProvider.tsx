import { useState, createContext, useMemo } from 'react';
import type { UserProfile } from '~/types/UserProfile';

type OAuthProviderContextType = {
  discogsUser: UserProfile | null;
  setDiscogsUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
};

export const OAuthContext = createContext<OAuthProviderContextType | null>(
  null
);

export const OAuthProvider = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  const [discogsUser, setDiscogsUser] = useState<UserProfile | null>(null);

  const value = useMemo(() => ({ discogsUser, setDiscogsUser }), [discogsUser]);
  return (
    <OAuthContext.Provider value={value}>{children}</OAuthContext.Provider>
  );
};
