import { useGetCollection } from '~/hooks/useGetCollection';
import type { DiscogsListingResponse } from '~/mappers/DiscogsListing';
import { DiscogsListingMapper } from '~/mappers/DiscogsListing';
import clsx from 'clsx';
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

  if (isLoading || isPending) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <ul className='flex flex-wrap items-stretch gap-8'>
        {DiscogsListingMapper.mapToReleaseList(data?.releases).map(
          (release: DiscogsListingResponse) => {
            return (
              <li
                key={release.instance_id}
                className='block max-w-[306px] rounded-xl border-1 border-solid border-black bg-white p-6 shadow-xl/30'
              >
                <figure>
                  <div
                    className={clsx(
                      `relative mb-4 aspect-square w-3xs max-w-80 border-2 border-solid border-black`,
                      `rounded-b-full`
                    )}
                  >
                    <img
                      src={release.cover_image}
                      alt={`Album cover for ${release.title}`}
                      className={clsx(
                        `absolute top-0 right-0 bottom-0 left-0 block aspect-square w-300 bg-contain object-cover`,
                        `rounded-b-full`
                      )}
                    />
                  </div>
                  <figcaption>
                    <span className='block font-bold'>{release.title}</span>
                    {release.artist}
                  </figcaption>
                </figure>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
