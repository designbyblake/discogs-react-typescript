import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type {
  OAuthTokenSecretResponse,
  OAuthGetTokenRequest
} from '~/types/OAuth';

export const useGetTokenSecret = ({ oauth_verifier }: OAuthGetTokenRequest) => {
  const baseUrl = import.meta.env.VITE_PROXY_URL;

  return useQuery<OAuthTokenSecretResponse>({
    queryKey: ['oauthTokenSecret'],
    queryFn: () =>
      axios
        .post(
          `${baseUrl}/discogs/oauth/access_token`,
          {
            oauth_verifier: oauth_verifier
          },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        }),
    staleTime: 0, // Data is considered stale immediately
    gcTime: 0 // Remove from cache immediately when stale and inactive
  });
};
