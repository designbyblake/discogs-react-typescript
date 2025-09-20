import { useContext } from 'react';
import { OAuthContext } from '~/providers-context';
import { DiscogsValues, DiscogsListInfite } from '~/components/Discogs';
import { Heading } from '~/components/Heading/Heading';
import type { Route } from './+types/MyCollection';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'My Collection' }, { name: 'description', content: '' }];
}

export default function MyCollection() {
  const oAuth = useContext(OAuthContext);

  if (!oAuth || !oAuth.discogsUser) return <h1>You are not logged in</h1>;

  const { username } = oAuth.discogsUser;

  return (
    <>
      <Heading level='h1'>Collection {username}</Heading>
      <DiscogsValues username={username} />
      <DiscogsListInfite username={username} />
    </>
  );
}
