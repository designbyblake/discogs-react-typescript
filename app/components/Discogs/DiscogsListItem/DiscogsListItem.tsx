import clsx from 'clsx';
export const DiscogsListItem = ({
  coverImage,
  title,
  artist,
  format
}: DiscogsListItemProps) => {
  return (
    <div className='block max-w-[306px] rounded-xl border-1 border-solid border-black bg-white p-6 shadow-xl/30'>
      <figure>
        <div
          className={clsx(
            `relative mb-4 aspect-square w-3xs max-w-80 border-2 border-solid border-black`,
            `rounded-b-full`
          )}
        >
          {coverImage && (
            <img
              src={coverImage}
              alt={`Album cover for ${title}`}
              className={clsx(
                `absolute top-0 right-0 bottom-0 left-0 block aspect-square w-300 bg-contain object-cover`,
                `rounded-b-full`
              )}
              loading='lazy'
            />
          )}
        </div>
        <figcaption className='flex flex-col gap-1'>
          <span className='block text-xl font-bold text-(--color-upsdell-red)'>
            {title}
          </span>
          <strong className='text-l block'>{artist}</strong>
          <span className='block text-sm'>{format}</span>
        </figcaption>
      </figure>
    </div>
  );
};

export type DiscogsListItemProps = {
  coverImage: string;
  title: string;
  artist: string;
  format: string;
};
