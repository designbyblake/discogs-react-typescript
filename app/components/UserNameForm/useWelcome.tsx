import { useQuery } from '@tanstack/react-query';
import { default as axios } from 'axios';

export const useWelcome = ({ name }: { name: string }) => {
  const baseUrl = import.meta.env.VITE_PROXY_URL;
  return useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .post(baseUrl, {
          name
        })
        .then((response) => {
          return response.data;
        })
  });
};
