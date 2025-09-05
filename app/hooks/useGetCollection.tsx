import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type { Collection } from '~/types/Collection';
import type { GetCollectionParams } from '~/types/DiscogsRequests';
import { ENDPOINT_ROUTES } from '~/constants/routes';

export const useGetCollection = ({
  name,
  page = 1,
  per_page = 500,
  sort = 'added',
  sort_order = 'desc'
}: GetCollectionParams) => {
  return useQuery<Collection>({
    queryKey: ['collection', name, page, per_page, sort, sort_order],
    queryFn: () =>
      axios
        .post(
          ENDPOINT_ROUTES.GET_COLLECTION,
          {
            name,
            page,
            per_page,
            sort,
            sort_order
          },
          { withCredentials: true }
        )
        .then((response) => {
          return response.data;
        })
  });
};
