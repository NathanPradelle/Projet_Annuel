import { t } from 'i18next';
import React from 'react';

import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import useColumns from './useColumns';

const MyReservationsPage = ({ reservations, pagination }) => {
  const columns = useColumns();

  console.log(reservations, pagination);

  return (
    <AuthenticatedLayout
      headTitle='CustomerIndex'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          {t('reservation.recap')}
        </h2>
      }
    >
      <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        {reservations?.length === 0 ? (
          <div className='py-8'>
            <p className='text-gray-600'>{t('reservation.noReservation')}</p>
          </div>
        ) : (
          <div className='bg-white shadow-sm sm:rounded-lg p-6 text-gray-900'>
            <Table columns={columns} data={reservations} />
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default MyReservationsPage;
