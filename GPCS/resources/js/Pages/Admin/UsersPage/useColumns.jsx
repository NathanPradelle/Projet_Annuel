import { Link } from '@inertiajs/react';
import { t } from 'i18next';
import { useMemo } from 'react';

import { getProfileLabel } from '@/utils/user';

const useColumns = () => {
  const columns = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        valueGetter: (row) => row?.id,
        renderCell: (row) => row?.id,
      },
      {
        field: 'name',
        headerName: 'Nom',
        valueGetter: (row) => row?.name,
        renderCell: (row) => row?.name,
      },
      {
        field: 'email',
        headerName: 'Email',
        valueGetter: (row) => row?.email,
        renderCell: (row) => row?.email,
      },
      {
        field: 'profiles',
        headerName: 'Role',
        valueGetter: (row) => row?.profileInUse,
        renderCell: (row) => getProfileLabel(row?.profileInUse),
      },
      {
        renderCell: (row) => (
          <Link href={route('user', row?.id)}>{t('common.details')}</Link>
        ),
      },
      {
        renderCell: (row) => (
          <a
            href={route('user.exclude', { user: row?.id })}
            className='text-red-600 hover:text-red-900'
          >
            RGPD
          </a>
        ),
      },
    ],
    []
  );

  return columns;
};

export default useColumns;
