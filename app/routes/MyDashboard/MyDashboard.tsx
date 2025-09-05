import { useContext } from 'react';
import { DiscogsList, DashboardHeader } from '~/components/Discogs';
import { Heading } from '~/components/Heading/Heading';
import { OAuthContext } from '~/providers-context';
import type { Route } from './+types/MyDashboard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' }
  ];
}

export default function MyDashboard() {
  const oAuth = useContext(OAuthContext);

  if (!oAuth || !oAuth.discogsUser) return <h1>Oops</h1>;

  const {
    username,
    avatar_url,
    buyer_num_ratings,
    buyer_rating,
    num_collection,
    num_for_sale,
    num_wantlist
  } = oAuth?.discogsUser;
  return (
    <>
      <Heading level='h1'>Welcome {username}</Heading>
      <DashboardHeader
        avatar_url={avatar_url}
        username={username}
        buyer_rating={buyer_rating}
        buyer_num_ratings={buyer_num_ratings}
        num_collection={num_collection}
        num_for_sale={num_for_sale}
        num_wantlist={num_wantlist}
      />
      <hr className='my-12 h-0.5 border-t-0 bg-neutral-100' />
      <DiscogsList username={username} per_page={25} />
    </>
  );
}
