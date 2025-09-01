import { Form, Link, redirect } from 'react-router';

import type { Route } from '../+types/help';
import styles from './Home.module.scss';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' }
  ];
}

export async function action({ params, request }: Route.ActionArgs) {
  const formData = await request.formData();
  const formDataObject = Object.fromEntries(formData);
  const { username } = formDataObject;

  return redirect(`/${username}/collection`);
}

export default function Home() {
  return (
    <>
      <p className='mb-5'>
        Enter a Discogs Username below to browser publicly available collections
        and wantlists. You may also{' '}
        <Link to={'oauth/login'}>sign in through Discogs</Link> to get
        additional features for your user.
      </p>
      <Form className={styles.root} id='discogs-username' method='post'>
        <label htmlFor='discogs_username'>Your Discogs Username</label>
        <input
          type='text'
          id='discogs_username'
          name='username'
          placeholder='username'
          required
          autoComplete='off'
          data-lpignore='true'
        />
        <button type='submit'>Test</button>
      </Form>
    </>
  );
}
