import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import { OAuthContext } from '~/providers-context';
import { ENDPOINT_ROUTES } from '~/constants/routes';
import { useNavigate } from 'react-router';
export const useLogOut = () => {
  const oAuth = useContext(OAuthContext);
  const navigate = useNavigate();

  return useQuery({
    queryKey: ['oAuthLogout'],
    queryFn: () =>
      axios
        .post(ENDPOINT_ROUTES.OAUTH_LOGOUT, {}, { withCredentials: true })
        .then((response) => {
          if (response.status === 200) {
            oAuth?.setDiscogsUser(null);
            navigate('/');
          }

          return response.data;
        })
        .catch((error) => {
          console.log(error);
        }),
    staleTime: 0, // Data is considered stale immediately
    gcTime: 0 // Remove from cache immediately when stale and inactive
  });
};
