import { InertiaLink } from '@inertiajs/inertia-react';
import { t } from 'i18next';
import React from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import ApartmentWindow from '@/Features/ApartmentWindow/ApartmentWindow';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AppartementsPage = ({ apartments, storagePath }) => {
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
                actions={
                  <SimpleButton to={route('apartment.show', apartment.id)}>
                    {t('common.details')}
                  </SimpleButton>
                }
                bg='bg-strawberry'
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
