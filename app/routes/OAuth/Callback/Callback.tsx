import { useSearchParams } from 'react-router';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OAuthContext } from '~/providers-context';
import { useGetTokenSecret } from '../hooks/useGetTokenSecret';

export default function Callback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const oAuth = useContext(OAuthContext);

  const oauth_verifier = searchParams.get('oauth_verifier') || '';

  const { data } = useGetTokenSecret({
    oauth_verifier
  });

  useEffect(() => {
    if (data && oAuth && !oAuth.discogsUser) {
      const { username, id, resource_url } = data;
      oAuth.setDiscogsUser({ username, id, resource_url });
      navigate(`/${username}/collection`, { replace: true });
    }
  }, [data, oAuth, navigate]);
  return (
    <>
      <h1>Finishing up the login process</h1>
    </>
  );
}
