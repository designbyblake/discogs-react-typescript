import { useInfiniteQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type { Collection } from '~/types/Collection';
import type { GetCollectionParams } from '~/types/DiscogsRequests';
import { ENDPOINT_ROUTES } from '~/constants/routes';

export const useGetInfiniteCollection = ({
  name,
  per_page = 500,
  sort = 'artist',
  sort_order = 'asc'
}: GetCollectionParams) => {
  return useInfiniteQuery<Collection>({
    queryKey: ['infiniteCollection', name, per_page, sort, sort_order],
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { page, pages } = lastPage.pagination;
      if (page === pages) {
        return undefined;
      }

      return page + 1;
    },
    queryFn: ({ pageParam = 1 }) =>
      axios
        .post(
          ENDPOINT_ROUTES.GET_COLLECTION,
          {
            name,
            page: pageParam,
            per_page,
            sort,
            sort_order
          },
          { withCredentials: true }
        )
        .then((response) => response.data)
  });
};
