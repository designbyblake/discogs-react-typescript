import { useWelcome } from './useWelcome';
import { Form, redirect } from 'react-router';
import type { Route } from '../../+types/root';
import styles from './UserNameForm.module.scss';
export async function action({ params }: Route.ActionArgs) {
  return redirect(`/${params.username}/collection`);
}
export function UserNameForm() {
  const { isPending, error, data } = useWelcome({ name: 'Dave' });
  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  console.log(data);
  return (
    <>
      <h1>{data.message}</h1>
      <Form className={styles.root} method='post' action={`/`}>
        <label htmlFor='username'>Your email</label>
        <input
          type='text'
          id='username'
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
