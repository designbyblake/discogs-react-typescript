import { useGetInfiniteCollection } from '~/hooks/useGetInfiniteCollection';
import type { DiscogsListingResponse } from '~/mappers/DiscogsListing';
import { DiscogsListingMapper } from '~/mappers/DiscogsListing';
import { DiscogsListItem } from '../DiscogsListItem/DiscogsListItem';
import { useEffect, useMemo, useState } from 'react';
import { Input } from 'antd';

import type { Release } from '~/types/Collection';

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

  const [searchTerm, setSearchTerm] = useState('');

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
  const releases = useMemo(
    () => data?.pages.flatMap((page) => page.releases || []) ?? [],
    [data]
  );

  const mappedReleases = useMemo(
    () =>
      DiscogsListingMapper.mapToReleaseList(
        filteredRelease(releases, searchTerm)
      ),
    [releases, searchTerm]
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
        <div className='mb-4'>
          <label htmlFor='my-collection-search' className='mb-4 text-2xl'>
            Search Collection
          </label>
          <Input
            id='my-collection-search'
            size='large'
            placeholder='Search Collection'
            onChange={(e) => setSearchTerm(e.target.value)}
            className='mb-4'
          />
        </div>
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
  }

  return <h1>Nothing to see here</h1>;
};
