import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';
import type { Collection } from '~/types/Collection';
import type { GetCollectionParams } from '~/types/DiscogsRequests';
export const useGetCollection = ({
  name,
  page = 1,
  per_page = 500,
  sort = 'added',
  sort_order = 'desc'
}: GetCollectionParams) => {
  const baseUrl = import.meta.env.VITE_PROXY_URL;
  return useQuery<Collection>({
    queryKey: ['collection', name, page, per_page, sort, sort_order],
    queryFn: () =>
      axios
        .post(
          `${baseUrl}/discogs/collection`,
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
