import { Outlet } from 'react-router';
import { useIsLoggedIn } from './routes/OAuth/hooks/useIsLoggedIn';
export const AppOutlet = () => {
  const { isLoading } = useIsLoggedIn();

  if (isLoading) return <h1>Loading...</h1>;

  return <Outlet />;
};
