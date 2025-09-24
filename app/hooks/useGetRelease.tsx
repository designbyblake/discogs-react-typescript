import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type { DiscogsRelease } from '~/types/Release';
import { ENDPOINT_ROUTES } from '~/constants/routes';

export const useGetRelease = ({ release_id }: { release_id: string }) => {
  return useQuery<DiscogsRelease>({
    queryKey: ['getRelease', release_id],
    queryFn: () =>
      axios
        .post(
          ENDPOINT_ROUTES.GET_RELEASE,
          {
            releaseId: release_id
          },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        }),
    gcTime: 1000 * 60 * 60 // 1 hour
  });
};
