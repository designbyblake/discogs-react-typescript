import type { Children } from '~/types/Children';

export const DashboardUserItem = ({ children }: Children) => {
  return <li className='mb-3 text-2xl'>{children}</li>;
};
