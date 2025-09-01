import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type { GetCollectionValues } from '~/types/DiscogsRequests';
export const useGetValue = ({ name }: { name: string }) => {
  const baseUrl = import.meta.env.VITE_PROXY_URL;
  return useQuery<GetCollectionValues>({
    queryKey: ['collection_value', name],
    queryFn: () =>
      axios
        .post(
          `${baseUrl}/discogs/collection/values`,
          { name },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        })
  });
};
