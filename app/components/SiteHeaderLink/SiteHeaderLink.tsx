import type { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router';
import type { Children } from '~/types/Children';
export const SiteHeaderLink = ({
  children,
  to,
  cssModifers,
  ...props
}: SiteHeaderLinkProps) => {
  return (
    <Link
      to={to}
      className={`px-6 py-3 font-bold outline-offset-4 transition-all hover:bg-black hover:text-white ${cssModifers}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export type SiteHeaderLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Children & {
    to: string;
    cssModifers?: string;
  };
