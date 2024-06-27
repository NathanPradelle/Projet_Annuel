import { Inertia } from '@inertiajs/inertia';
import React from 'react';

import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import useColumns from './useColumns';

const MyReservationsPage = ({ reservations, pagination }) => {
  const columns = useColumns();

  console.log(reservations, pagination);

  return (
    <AuthenticatedLayout>
      <h1 className='text-2xl font-semibold mb-4'>
        Récapitulatif de mes réservations
      </h1>
      <div>
        {reservations?.length === 0 ? (
          <div className='py-8'>
            <p className='text-gray-600'>
              Vous n'avez aucune réservation pour le moment.
            </p>
          </div>
        ) : (
          <div className='py-12'>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <Table columns={columns} data={reservations} />

              {/*<table className='w-full bg-white shadow-md rounded my-4'>
                <thead>
                  <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                    <th className='py-3 px-6 text-left'>Appartement</th>
                    <th className='py-3 px-6 text-left'>Prix</th>
                    <th className='py-3 px-6 text-left'>Date de début</th>
                    <th className='py-3 px-6 text-left'>Date de fin</th>
                    <th className='py-3 px-6 text-left'>Date de réservation</th>
                    <th className='py-3 px-6 text-left'>Statut</th>
                    <th className='py-3 px-6 text-center'>Action</th>
                  </tr>
                </thead>
                <tbody className='text-gray-600 text-sm font-light'>
                  {reservations?.map((reservation) => (
                    <tr
                      key={reservation.id}
                      className='border-b border-gray-200'
                    >
                      <td className='py-3 px-6 text-left'>
                        {reservation.price}€
                      </td>
                      <td className='py-3 px-6 text-left'>
                        {reservation.dateStart}
                      </td>
                      <td className='py-3 px-6 text-left'>
                        {reservation.dateEnd}
                      </td>
                      <td className='py-3 px-6 text-left'>
                        {reservation.created_at}
                      </td>
                      <td className='py-3 px-6 text-left'>
                        {reservation.status}
                      </td>
                      <td className='py-3 px-6 text-center'>
                        {new Date().getTime() -
                          new Date(reservation.start_time).getTime() <
                          48 * 60 * 60 * 1000 &&
                          reservation.status != 'Refusé' && (
                            <button
                              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                              onClick={(e) =>
                                handleCancelReservation(e, row?.id)
                              }
                            >
                              Annuler
                            </button>
                          )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>*/}
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default MyReservationsPage;
