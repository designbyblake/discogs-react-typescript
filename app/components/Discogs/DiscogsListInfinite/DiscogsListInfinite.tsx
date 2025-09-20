import { useGetInfiniteCollection } from '~/hooks/useGetInfiniteCollection';
import type { DiscogsListingResponse } from '~/mappers/DiscogsListing';
import { DiscogsListingMapper } from '~/mappers/DiscogsListing';
import { DiscogsListItem } from '../DiscogsListItem/DiscogsListItem';
import { useEffect, useMemo } from 'react';

export const DiscogsListInfite = ({
  username,
  per_page
}: {
  username: string;
  per_page?: number;
}) => {
  const { isPending, error, data, isLoading, hasNextPage, fetchNextPage } =
    useGetInfiniteCollection({
      name: username,
      per_page: per_page
    });
  const releases = useMemo(
    () => data?.pages.flatMap((page) => page.releases || []) ?? [],
    [data]
  );

  const mappedReleases = useMemo(
    () => DiscogsListingMapper.mapToReleaseList(releases),
    [releases]
  );
  //Automatically fetch next pages.
  useEffect(() => {
    if (hasNextPage) fetchNextPage();
  }, [hasNextPage, fetchNextPage]);

  if (isLoading || isPending) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  if (releases && releases.length > 0) {
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
  }

  return <h1>Nothing to see here</h1>;
};
