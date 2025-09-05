import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import { ENDPOINT_ROUTES } from '~/constants/routes';
import type { OAuthRequestTokenResponse } from '~/types/OAuth';

export const useGetOAuthToken = () => {
  return useQuery<OAuthRequestTokenResponse>({
    queryKey: ['oauth'],
    queryFn: () =>
      axios
        .post(
          ENDPOINT_ROUTES.OAUTH_REQUEST_TOKEN,
          {
            callbackURL: `http://localhost:5173/oauth/callback`
          },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        })
    // staleTime: 0, // Data is considered stale immediately
    // gcTime: 0 // Remove from cache immediately when stale and inactive
  });
};
