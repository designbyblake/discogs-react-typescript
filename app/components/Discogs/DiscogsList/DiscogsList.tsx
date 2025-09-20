import { useGetCollection } from '~/hooks/useGetCollection';
import type { DiscogsListingResponse } from '~/mappers/DiscogsListing';
import { DiscogsListingMapper } from '~/mappers/DiscogsListing';
import { DiscogsListItem } from '../DiscogsListItem/DiscogsListItem';
import { useMemo } from 'react';
export const DiscogsList = ({
  username,
  per_page
}: {
  username: string;
  per_page?: number;
}) => {
  const { isPending, error, data, isLoading } = useGetCollection({
    name: username,
    per_page: per_page
  });
  const releases = data?.releases || [];

  const mappedReleases = useMemo(
    () => DiscogsListingMapper.mapToReleaseList(releases),
    [releases]
  );
  if (isLoading || isPending) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <ul className='flex flex-wrap items-stretch gap-8'>
        {mappedReleases.map((release: DiscogsListingResponse) => {
          return (
            <DiscogsListItem
              key={release.instance_id}
              coverImage={release.cover_image}
              title={`${release.title} - ${release.release_id}`}
              artist={release.artist}
              format={release.format}
            />
          );
        })}
      </ul>
    </div>
  );
};
