import './ApartmentsPage.less';

import { InertiaLink } from '@inertiajs/inertia-react';
import { t } from 'i18next';
import React from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import ApartmentWindow from './ApartmentWindow';

const AppartementsPage = ({ apartments, storagePath }) => {
  //   const handleImageError = () => {
  //     document.getElementById('screenshot-container')?.classList.add('!hidden');
  //     document.getElementById('docs-card')?.classList.add('!row-span-1');
  //     document.getElementById('docs-card-content')?.classList.add('!flex-row');
  //     document.getElementById('background')?.classList.add('!hidden');
  //   };
  console.log(apartments);
  return (
      <AuthenticatedLayout
          head='Welcome'
          className='bg-gradient-to-br from-gray-800 to-gray-600 dark:bg-black dark:text-white/50 flex-col'
      >
          <h3 className='flex-center m-2'>{t('appLongName')}</h3>
          <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
              {apartments?.data?.length > 0 ? (
                  <div className='flex flex-wrap gap-2 justify-start'>
                      {apartments?.data?.map((apartment) => (
                          <ApartmentWindow
                              key={apartment.id}
                              apartment={apartment}
                              storagePath={storagePath}
                          />
                      ))}
                  </div>
              ) : (
                  <>
                      <p className='text-center text-gray-600 text-lg'>
                          {t('apartment.noApartmentAvailable')}
                      </p>
                      <InertiaLink href={route('apartment.create')} className='mt-4'>
                          {t('apartment.askYours')}
                      </InertiaLink>
                  </>
              )}
          </div>

      </AuthenticatedLayout>
  );
};

export default AppartementsPage;
