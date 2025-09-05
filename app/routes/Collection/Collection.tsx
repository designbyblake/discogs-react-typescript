import { DiscogsList, DiscogsValues } from '~/components/Discogs';
export default function Collection({
  params
}: {
  params: { username: string };
}) {
  const { username } = params;

  return (
    <div>
      <h1>Collection {username}</h1>
      <DiscogsList username={username} />
    </div>
  );
}
