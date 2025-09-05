import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import { ENDPOINT_ROUTES } from '~/constants/routes';
import type { GetCollectionValues } from '~/types/DiscogsRequests';
export const useGetValue = ({ name }: { name: string }) => {
  return useQuery<GetCollectionValues>({
    queryKey: ['collection_value', name],
    queryFn: () =>
      axios
        .post(
          ENDPOINT_ROUTES.GET_COLLECTION_VALUES,
          { name },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        })
  });
};
