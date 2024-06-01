import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AppartementsPage = ({ appartements, storagePath }) => {
  //   const handleImageError = () => {
  //     document.getElementById('screenshot-container')?.classList.add('!hidden');
  //     document.getElementById('docs-card')?.classList.add('!row-span-1');
  //     document.getElementById('docs-card-content')?.classList.add('!flex-row');
  //     document.getElementById('background')?.classList.add('!hidden');
  //   };

  return (
    <AuthenticatedLayout
      head='Welcome'
      className='bg-gradient-to-br from-gray-800 to-gray-600 text-black/50 dark:bg-black dark:text-white/50 flex-col'
    >
      <h3 className='flex-center m-2'>Grand Paris Caretaker Services</h3>
      <div className=''>
        {appartements.data.length > 0 ? (
          appartements.data.map((appartement) => (
            <div key={appartement.id}>
              <InertiaLink
                href={route('apartment.show', appartement.id)}
                className='block'
              >
                {appartement.images.length > 0 ? (
                  <img
                    src={storagePath + '/' + appartement.images[0].image}
                    width='100%'
                    style={{ height: '250px' }}
                    alt='Appartement'
                  />
                ) : (
                  <p>Aucune image disponible</p>
                )}
                <h1 className='text-2xl font-extrabold'>{appartement.name}</h1>
                <p>{appartement.address}</p>
                <p>Loué par {appartement.user.name}</p>
                <p>
                  <span className='font-extrabold'>{appartement.price}€</span>{' '}
                  par nuit
                </p>
                {appartement.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className='bg-blue-900 text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-blue-800'
                  >
                    {tag.name}
                  </span>
                ))}
              </InertiaLink>
            </div>
          ))
        ) : (
          <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg flex flex-col items-center'>
            <p className='text-center text-gray-600 text-lg'>
              Aucun appartement disponible...
            </p>
            <InertiaLink href={route('apartment.create')} className='mt-4'>
              <button className='btn btn-primary'>
                Et si vous proposiez le vôtre ?
              </button>
            </InertiaLink>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default AppartementsPage;
