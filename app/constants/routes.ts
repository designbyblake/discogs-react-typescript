const baseUrl = import.meta.env.VITE_PROXY_URL;

export const ENDPOINT_ROUTES = {
  GET_COLLECTION: `${baseUrl}/discogs/collection`,
  GET_COLLECTION_VALUES: `${baseUrl}/discogs/collection/values`,
  OAUTH_REQUEST_TOKEN: `${baseUrl}/discogs/oauth/request_token`,
  OAUTH_ACCESS_TOKEN: `${baseUrl}/discogs/oauth/access_token`,
  OAUTH_CHECK_ACCESS: `${baseUrl}/discogs/oauth/check_access`,
  OAUTH_LOGOUT: `${baseUrl}/discogs/oauth/logout`
};

export const APP_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  MY_DASHBOARD: '/dashboard',
  MY_COLLECTION: '/collection',
  MY_WANTLIST: '/wantlist',
  DASHBOARD: '/:username/dashboard',
  COLLECTION: '/:username/collection',
  WANTLIST: '/:username/wantlist',
  LOGIN: '/oauth/login',
  LOGOUT: '/oauth/logout',
  CALLBACK: 'oauth/callback'
};
