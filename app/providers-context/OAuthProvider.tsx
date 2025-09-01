import { useState, createContext, useMemo } from 'react';
import type { OAuthTokenSecretResponse } from '~/types/OAuth';

type OAuthProviderContextType = {
  discogsUser: OAuthTokenSecretResponse | null;
  setDiscogsUser: React.Dispatch<
    React.SetStateAction<OAuthTokenSecretResponse | null>
  >;
};

export const OAuthContext = createContext<OAuthProviderContextType | null>(
  null
);

export const OAuthProvider = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  const [discogsUser, setDiscogsUser] =
    useState<OAuthTokenSecretResponse | null>(null);

  const value = useMemo(() => ({ discogsUser, setDiscogsUser }), [discogsUser]);
  return (
    <OAuthContext.Provider value={value}>{children}</OAuthContext.Provider>
  );
};
