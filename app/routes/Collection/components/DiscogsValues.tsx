import { useGetValue } from '../hooks/useGetValue';
export const DiscogsValues = ({ username }: { username: string }) => {
  const { isPending, isLoading, error, data } = useGetValue({ name: username });

  if (isLoading || isPending) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;
  const { minimum, median, maximum } = data;
  return (
    <div>
      <h2>Collection Value</h2>
      <p>
        {minimum} - {median} - {maximum}
      </p>
    </div>
  );
};
