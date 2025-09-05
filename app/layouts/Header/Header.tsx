import { useContext } from 'react';
import { OAuthContext } from '~/providers-context';
import { SiteHeader, SiteHeaderLink } from '~/components';

import { APP_ROUTES } from '~/constants/routes';

export const Header = () => {
  const oAuth = useContext(OAuthContext);

  if (!oAuth || !oAuth.discogsUser) {
    return (
      <SiteHeader>
        <p className='text-2xl'>You are not logged in</p>
        <SiteHeaderLink to={APP_ROUTES.LOGIN}>
          Login through Discogs
        </SiteHeaderLink>
      </SiteHeader>
    );
  }
  const { username, avatar_url } = oAuth.discogsUser;

  return (
    <SiteHeader>
      <ul className='mr-auto flex gap-5'>
        <li>
          <SiteHeaderLink to={APP_ROUTES.MY_DASHBOARD}>
            Dashboard
          </SiteHeaderLink>
        </li>
        <li>
          <SiteHeaderLink to={APP_ROUTES.MY_COLLECTION}>
            Collection
          </SiteHeaderLink>
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        <p className='text-2xl'>
          Hello {username},{' '}
          <SiteHeaderLink to={APP_ROUTES.LOGOUT}>Log Out</SiteHeaderLink>
        </p>

        {avatar_url && (
          <img
            className='solid shadow-m box-border block max-h-12 rounded-full shadow-xl'
            src={avatar_url}
            alt={`Avatar for ${username}`}
          />
        )}
      </div>
    </SiteHeader>
  );
};
