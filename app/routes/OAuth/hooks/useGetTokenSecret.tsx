import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type { OAuthGetTokenRequest } from '~/types/OAuth';
import { ENDPOINT_ROUTES } from '~/constants/routes';
import type { UserProfile } from '~/types/UserProfile';

export const useGetTokenSecret = ({ oauth_verifier }: OAuthGetTokenRequest) => {
  return useQuery<UserProfile>({
    queryKey: ['oauthTokenSecret', oauth_verifier],
    queryFn: async () => {
      console.log('useGetTokenSecretBeing Called');
      return axios
        .post(
          ENDPOINT_ROUTES.OAUTH_ACCESS_TOKEN,
          { oauth_verifier },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    enabled: !!oauth_verifier
    // staleTime: 0, // Data is considered stale immediately
    // gcTime: 0 // Remove from cache immediately when stale and inactive
  });
};
