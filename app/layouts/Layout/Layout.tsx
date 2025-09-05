import { Outlet } from 'react-router';

import { Header } from '../Header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main className='z-1 mx-auto max-w-[1360px] px-5 py-10'>
        <Outlet />
      </main>
    </>
  );
}
