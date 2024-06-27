import { Inertia } from '@inertiajs/inertia';
import { useMemo } from 'react';

const useColumns = () => {
  const handleCancelReservation = (e, reservationId) => {
    e.preventDefault();
    if (confirm('Êtes-vous sûr de vouloir annuler cette réservation ?')) {
      Inertia.patch(route('reservation.refused', reservationId));
    }
  };

  const columns = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Nom',
        valueGetter: (row) => row?.apartment?.name,
        renderCell: (row) => row?.apartment?.name,
      },
      {
        field: 'price',
        headerName: 'Price',
        valueGetter: (row) => row?.price,
        renderCell: (row) => row?.price,
      },
      {
        field: 'dateStart',
        headerName: 'dateStart',
        valueGetter: (row) => row?.dateStart,
        renderCell: (row) => row?.dateStart,
      },
      {
        field: 'dateEnd',
        headerName: 'dateEnd',
        valueGetter: (row) => row?.dateEnd,
        renderCell: (row) => row?.dateEnd,
      },
      {
        field: 'createdAt',
        headerName: 'createdAt',
        valueGetter: (row) => row?.createdAt,
        renderCell: (row) => row?.createdAt,
      },
      {
        field: 'status',
        headerName: 'status',
        valueGetter: (row) => row?.status,
        renderCell: (row) => row?.status,
      },
      {
        renderCell: (row) => (
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={(e) => handleCancelReservation(e, row?.id)}
          >
            Annuler
          </button>
        ),
      },
    ],
    []
  );

  return columns;
};

export default useColumns;
