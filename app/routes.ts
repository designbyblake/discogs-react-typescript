import type { RouteConfig } from '@react-router/dev/routes';
import { index, layout, route } from '@react-router/dev/routes';

export default [
  layout('layouts/Layout/Layout.tsx', [
    index('routes/Home/Home.tsx'),
    route('/:username/collection', 'routes/Collection/Collection.tsx'),

    route('about', 'routes/about.tsx'),
    route('help', 'routes/help.tsx'),

    route('/oauth/login', 'routes/OAuth/Login/Login.tsx'),
    route('/oauth/callback', 'routes/OAuth/Callback/Callback.tsx')
  ])
] satisfies RouteConfig;
