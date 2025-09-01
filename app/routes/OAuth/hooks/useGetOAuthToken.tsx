import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type { OAuthRequestTokenResponse } from '~/types/OAuth';

export const useGetOAuthToken = () => {
  const baseUrl = import.meta.env.VITE_PROXY_URL;
  return useQuery<OAuthRequestTokenResponse>({
    queryKey: ['oauth'],
    queryFn: () =>
      axios
        .post(
          `${baseUrl}/discogs/oauth/request_token`,
          {
            callbackURL: `http://localhost:5173/oauth/callback`
          },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        }),
    staleTime: 0, // Data is considered stale immediately
    gcTime: 0 // Remove from cache immediately when stale and inactive
  });
};
