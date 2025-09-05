import type { RouteConfig } from '@react-router/dev/routes';
import { index, layout, route } from '@react-router/dev/routes';
import { APP_ROUTES } from './constants/routes';

export default [
  layout('layouts/Layout/Layout.tsx', [
    index('routes/Home/Home.tsx'),
    route(APP_ROUTES.MY_DASHBOARD, 'routes/MyDashboard/MyDashboard.tsx'),
    route(APP_ROUTES.MY_COLLECTION, 'routes/MyCollection/MyCollection.tsx'),

    route(APP_ROUTES.DASHBOARD, 'routes/Dashboard/Dashboard.tsx'),
    route(APP_ROUTES.COLLECTION, 'routes/Collection/Collection.tsx'),

    route(APP_ROUTES.ABOUT, 'routes/about.tsx'),

    route(APP_ROUTES.LOGIN, 'routes/OAuth/Login/Login.tsx'),
    route(APP_ROUTES.LOGOUT, 'routes/OAuth/Logout/Logout.tsx'),
    route(APP_ROUTES.CALLBACK, 'routes/OAuth/Callback/Callback.tsx')
  ])
] satisfies RouteConfig;
