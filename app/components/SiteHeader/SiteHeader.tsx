import clsx from 'clsx';
import type { Children } from '~/types/Children';

export const SiteHeader = ({ children }: Children) => {
  return (
    <header
      className={clsx(
        'border-b-1 border-solid border-b-black bg-white p-4 shadow-2xl',
        'center fixed top-0 z-50 flex w-full items-center justify-between gap-4'
      )}
    >
      {children}
    </header>
  );
};
