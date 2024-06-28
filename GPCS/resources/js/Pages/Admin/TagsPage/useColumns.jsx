import { Inertia } from '@inertiajs/inertia';
import { t } from 'i18next';
import { useMemo } from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';

const useColumns = () => {
  const handleDelete = (tagId) => {
    const deleteTagUrl = route('tag.destroy', { tag: tagId });
    Inertia.delete(deleteTagUrl, {
      onSuccess: () => {
        console.log('Tag deleted successfully');
      },
      onError: (error) => {
        console.error('Failed to delete Tag:', error);
      },
    });
  };

  const columns = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'name',
        valueGetter: (row) => row?.name,
        renderCell: (row) => row?.name,
      },
      {
        renderCell: (row) => (
          <SimpleButton to={route('tag.edit', row.id)}>
            {t('common.edit')}
          </SimpleButton>
        ),
      },
      {
        renderCell: (row) => (
          <SimpleButton onClick={() => handleDelete(row.id)} color='red'>
            {t('common.delete')}
          </SimpleButton>
        ),
      },
    ],
    []
  );

  return columns;
};

export default useColumns;
