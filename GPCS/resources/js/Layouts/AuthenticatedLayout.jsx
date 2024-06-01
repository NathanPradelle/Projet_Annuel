import { Head } from '@inertiajs/react';

import NavBars from '@/Components/NavBars';

const AuthenticatedLayout = ({ headTitle, header, className, children }) => {
  return (
    <div className='bg-gray-100'>
      <Head title={headTitle} />
      <nav className='bg-white border-b border-gray-100'>
        <NavBars />
      </nav>

      {header && (
        <header className='bg-white shadow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          {header}
        </header>
      )}

      <main id='content' className={className}>
        {children}
      </main>

      <footer className='py-4 text-center text-sm text-black dark:text-white/70 bg-gray-800'>
        Maxime Ahmad Nathan
      </footer>
    </div>
  );
};

export default AuthenticatedLayout;
