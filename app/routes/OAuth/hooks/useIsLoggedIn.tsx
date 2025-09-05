import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import { OAuthContext } from '~/providers-context';
import type { UserProfile } from '~/types/UserProfile';
import { APP_ROUTES, ENDPOINT_ROUTES } from '~/constants/routes';
import { useMatch } from 'react-router';
export const useIsLoggedIn = () => {
  const oAuth = useContext(OAuthContext);
  const match = useMatch(APP_ROUTES.CALLBACK);

  const query = useQuery<UserProfile>({
    queryKey: ['oAuthIsLoggedIn'],
    queryFn: () =>
      axios
        .post(ENDPOINT_ROUTES.OAUTH_CHECK_ACCESS, {}, { withCredentials: true })
        .then((response) => {
          if (response.data.username) {
            oAuth?.setDiscogsUser(response.data);
          }
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        }),
    staleTime: 0, // Data is considered stale immediately
    gcTime: 0 // Remove from cache immediately when stale and inactive
  });

  if (match) {
    return {
      isLoading: false
    };
  }

  return query;
};
