import { Link } from '@inertiajs/react';
import { t } from 'i18next';
import { useMemo, useState } from 'react';

import Modal from '@/Components/Modal';
import { getProfileLabel } from '@/utils/user';

import BanUserForm from './BanUserForm';
import BanUserList from './BanUserList';

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
      {
        renderCell: (row) => (
          <BanUserForm userId={row?.id} className='max-w-xl' />
        ),
      },
      {
        renderCell: (row) => <BanUserList userId={row?.id} />,
      },
    ],
    []
  );

  return columns;
};

export default useColumns;
