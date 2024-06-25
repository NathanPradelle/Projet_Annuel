import {Head, Link} from '@inertiajs/react';

import NavBars from '@/Components/NavBars';
import {t} from "i18next";
import {InertiaLink} from "@inertiajs/inertia-react";

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

        <footer
            className='py-4 flex justify-center items-center text-sm text-black dark:text-white/70 bg-gray-800 relative'>
            <div className='absolute left-4'>
            </div>
            <div>
                Maxime Ahmad Nathan
            </div>
            <div className='absolute right-4'>
                <Link href={route('contact.show')}>
                    <button className='bg-blue-500 text-white py-2 px-4 rounded'>
                        Nous Contactez !
                    </button>
                </Link>
            </div>
        </footer>

    </div>
  );
};

export default AuthenticatedLayout;
