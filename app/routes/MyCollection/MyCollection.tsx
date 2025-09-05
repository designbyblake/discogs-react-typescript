import { useContext } from 'react';
import { OAuthContext } from '~/providers-context';
import { DiscogsList, DiscogsValues } from '~/components/Discogs';
import type { Route } from './+types/MyCollection';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'My Collection' }, { name: 'description', content: '' }];
}

export default function MyCollection() {
  const oAuth = useContext(OAuthContext);

  if (!oAuth || !oAuth.discogsUser) return <h1>You are not logged in</h1>;

  const { username } = oAuth.discogsUser;

  return (
    <div>
      <h1>Collection {username}</h1>
      <DiscogsValues username={username} />
      <DiscogsList username={username} />
    </div>
  );
}
