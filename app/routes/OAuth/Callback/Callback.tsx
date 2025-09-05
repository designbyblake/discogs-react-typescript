import { useSearchParams } from 'react-router';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OAuthContext } from '~/providers-context';
import { useGetTokenSecret } from '../hooks/useGetTokenSecret';
import { APP_ROUTES } from '~/constants/routes';

export default function Callback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const oAuth = useContext(OAuthContext);

  const oauth_verifier = searchParams.get('oauth_verifier') || '';
  const { data } = useGetTokenSecret({ oauth_verifier });

  useEffect(() => {
    if (data && oAuth) {
      oAuth.setDiscogsUser(data);
      navigate(APP_ROUTES.MY_DASHBOARD, { replace: true });
    }
  }, [data, oAuth, navigate]);

  return <h1>Finishing the login process!</h1>;
}
