import type { Route } from './+types/Login';
import { useGetOAuthToken } from '../hooks/useGetOAuthToken';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Obtaining Discogs Auth Token' },
    { name: 'description', content: 'Obtaining Discogs Auth Token' }
  ];
}

export default function Login() {
  const { error, data, isLoading } = useGetOAuthToken();

  if (data) {
    const { authorizeURL } = data;
    const authURL = new URL(authorizeURL);
    window.location.replace(authURL);
  }

  if (error) return <p>Somthing has gone wrong</p>;
  return (
    <>
      <h1>Obtaining a Discogs Token</h1>
      <p>
        This page will redirect to Discogs for you to log in and allow access
        for this application. You can revoke access can at anytime on Discogs.
      </p>
    </>
  );
}
