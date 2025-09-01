import { useContext } from 'react';
import { OAuthContext } from '~/providers-context';
import { DiscogsList } from './components/DiscogsList';
import { DiscogsValues } from './components/DiscogsValues';
export default function Collection({
  params
}: {
  params: { username: string };
}) {
  const { username } = params;
  const oAuth = useContext(OAuthContext);
  console.log(oAuth?.discogsUser);

  return (
    <div>
      <h1>Collection {username} Test</h1>
      {/* {oAuth && oAuth.discogsUser?.username === username && ( */}
      <DiscogsValues username={username} />
      {/* )} */}

      <DiscogsList username={username} />
    </div>
  );
}
