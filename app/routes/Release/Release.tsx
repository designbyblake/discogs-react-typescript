import { useGetRelease } from '~/hooks/useGetRelease';
import type { Route } from './+types/Release';
import { useParams } from 'react-router';
import { Heading } from '~/components/Heading/Heading';
import { useMemo } from 'react';
import { DiscogsReleaseMapper } from '~/mappers/DiscogsRelease';
export function meta({}: Route.MetaArgs) {
  return [{ title: 'Release' }, { name: 'description', content: '' }];
}

export default function Release() {
  const { release_id } = useParams<{ release_id: string }>();
  const { data, isLoading, isPending, error } = useGetRelease({
    release_id: release_id || ''
  });

  const mappedRelease = useMemo(() => {
    if (!data) return undefined;
    return DiscogsReleaseMapper.mapToDiscogsRelease(data);
  }, [data]);

  if (error) return `An error has occurred: ${error.message}`;

  if (isLoading || isPending || !mappedRelease) {
    return (
      <div>
        <Heading level='h1'>Loading...</Heading>
      </div>
    );
  }

  console.log(mappedRelease);
  const { title, artists, images, notes } = mappedRelease;
  return (
    <>
      <Heading level='h1'>{title}</Heading>
      <img src={images[0]} alt='' />
      {notes && (
        <div
          dangerouslySetInnerHTML={{
            __html: notes.replace(/\n/g, '<br />')
          }}
        />
      )}
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            {artist.thumbnail_url && <img src={artist.thumbnail_url} alt='' />}
          </li>
        ))}
      </ul>
      <div>
        {images.slice(1).map((image, idx) => (
          <img key={image || idx} src={image} alt='' />
        ))}
      </div>
    </>
  );
}
