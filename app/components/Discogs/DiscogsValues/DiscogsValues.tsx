import { Heading } from '~/components/Heading/Heading';
import { useGetValue } from '~/hooks/useGetValue';
export const DiscogsValues = ({ username }: { username: string }) => {
  const { isPending, isLoading, error, data } = useGetValue({ name: username });

  if (isLoading || isPending) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;
  const { minimum, median, maximum } = data;
  return (
    <div className='mb-6 rounded-b-xl bg-black p-10 text-white'>
      <Heading>Collection Value</Heading>
      <p>
        <span className='text-3xl'>{minimum}</span> -----{' '}
        <span className='text-3xl'>{median}</span> -----{' '}
        <span className='text-3xl'>{maximum}</span>
      </p>
    </div>
  );
};
