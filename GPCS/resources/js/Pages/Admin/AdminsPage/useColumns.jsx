import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/react';
import { useCallback, useMemo, useState } from 'react';

import { getProfileLabel } from '@/utils/user';

const useColumns = () => {
  const { data, setData, patch } = useForm();
  const [editingUser, setUserToEdit] = useState(null);

  const handleEdit = useCallback((user) => {
    setData(user);
    setUserToEdit(user?.id);
  }, []);

  const handleSave = useCallback(
    (user) => {
      patch(route('users.update', user));
      setUserToEdit(null);
    },
    [data]
  );

  const handleDelete = (userId) => {
    const deleteUserUrl = route('users.destroy', { user: userId });
    Inertia.delete(deleteUserUrl, {
      onSuccess: () => {
        console.log('User deleted successfully');
      },
      onError: (error) => {
        console.error('Failed to delete user:', error);
      },
    });
  };

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
        renderCell: (row) =>
          editingUser === row.id ? (
            <input
              type='text'
              name='name'
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className='border border-gray-300 rounded-md px-2 py-1'
            />
          ) : (
            row?.name
          ),
      },
      {
        field: 'email',
        headerName: 'Email',
        valueGetter: (row) => row?.email,
        renderCell: (row) =>
          editingUser === row.id ? (
            <input
              type='email'
              name='email'
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className='border border-gray-300 rounded-md px-2 py-1'
            />
          ) : (
            row?.email
          ),
      },
      {
        field: 'profiles',
        headerName: 'Role',
        valueGetter: (row) => row?.profileInUse,
        renderCell: (row) =>
          editingUser === row.id ? (
            <select
              name='profile'
              value={data.profile}
              onChange={(e) => setData('profile', e.target.value)}
            >
              Gestionnaire Administrateur
            </select>
          ) : (
            getProfileLabel(row?.profileInUse)
          ),
      },
      {
        renderCell: (row) =>
          editingUser === row.id ? (
            <button
              onClick={() => handleSave(row)}
              className='text-indigo-600 hover:text-indigo-900'
            >
              Save
            </button>
          ) : (
            <>
              <button
                onClick={() => handleEdit(row)}
                className='text-indigo-600 hover:text-indigo-900'
              >
                Edit
              </button>
              <span className='px-2'>|</span>
              <button
                onClick={() => handleDelete(row.id)}
                className='text-red-600 hover:text-red-900'
              >
                Delete
              </button>
            </>
          ),
      },
    ],
    [editingUser]
  );

  return columns;
};

export default useColumns;
