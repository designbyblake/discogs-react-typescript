import type { Dispatch, SetStateAction } from 'react';
import type { O } from 'vitest/dist/chunks/reporters.d.BFLkQcL6.js';

export type OAuthRequestTokenResponse = {
  authorizeURL: string;
};

export type OAuthAccessTokenResponse = {
  oauth_token: string;
  oauth_verifier: string;
};

export type OAuthTokenSecretResponse = {
  id: number;
  username: string;
  resource_url: string;
};

export type OAuthGetTokenRequest = Pick<
  OAuthAccessTokenResponse,
  'oauth_verifier'
>;

export type OAuthProviderType = {
  discogsUser: OAuthTokenSecretResponse | null;
  setDiscogsUser: Dispatch<SetStateAction<OAuthTokenSecretResponse>>;
};
