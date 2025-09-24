import { useGetCollection } from '~/hooks/useGetCollection';
import type { DiscogsListingResponse } from '~/mappers/DiscogsListing';
import { DiscogsListingMapper } from '~/mappers/DiscogsListing';
import { DiscogsListItem } from '../DiscogsListItem/DiscogsListItem';
import { useMemo } from 'react';
import type { Release } from '~/types/Collection';

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

  // This function accepts the releases variable and a term variable which is a string.
  // it returns an array of values if:
  // 1. The release.title contains the term
  // 2. The release.artist contains the term
  const filteredRelease = (releases: Release[], term: string) => {
    if (!term) return releases;
    const lowerTerm = term.toLowerCase();
    return releases.filter(
      (release) =>
        release.basic_information?.title?.toLowerCase().includes(lowerTerm) ||
        release.basic_information.artists[0]?.name
          .toLowerCase()
          .includes(lowerTerm)
    );
  };

  const mappedReleases = useMemo(
    () =>
      DiscogsListingMapper.mapToReleaseList(filteredRelease(releases, 'Wils')),
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
              title={release.title}
              artist={release.artist}
              format={release.format}
              release_id={release.release_id}
            />
          );
        })}
      </ul>
    </div>
  );
};
