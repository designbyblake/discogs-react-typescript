import { useLogOut } from '../hooks/useLogOut';
import type { Route } from './+types/Logout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Logging out of this application' },
    { name: 'description', content: 'Deleting Tokens' }
  ];
}

export default function Login() {
  const { error } = useLogOut();

  if (error) return <p>Somthing has gone wrong</p>;
  return (
    <>
      <h1>Logging out</h1>
      <p>Removing cookies from browser.</p>
    </>
  );
}
