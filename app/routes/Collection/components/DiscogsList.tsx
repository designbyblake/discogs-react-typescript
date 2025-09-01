import { useGetCollection } from '../hooks/useGetCollection';
import type { Release } from '~/types/Collection';
export const DiscogsList = ({ username }: { username: string }) => {
  const { isPending, error, data, isLoading } = useGetCollection({
    name: username
  });

  if (isLoading || isPending) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <ul>
        {data?.releases?.map((release: Release) => {
          const { title, artists } = release.basic_information;
          return (
            <li key={release.instance_id}>
              {title} - {artists[0].name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
