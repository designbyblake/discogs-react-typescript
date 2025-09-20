import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type { Collection } from '~/types/Collection';
import { ENDPOINT_ROUTES } from '~/constants/routes';

export const useGetCollection = ({ release_id }: { release_id: number }) => {
  return useQuery<Collection>({
    queryKey: ['getRelease', release_id],
    queryFn: () =>
      axios
        .post(
          ENDPOINT_ROUTES.GET_RELEASE,
          {
            release_id
          },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        })
  });
};
