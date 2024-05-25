import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

import { getProfileLabel } from '@/utils/user';

const UsersPage = ({ users }) => {
  console.log(users);
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour filtrer les utilisateurs par nom ou par e-mail
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Gestionnaire de changement pour la recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Liste des clients
        </h2>
      }
    >
      <Head title='CustomerIndex' />

      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900'>
              {/* Champ de recherche */}
              <input
                type='text'
                placeholder='Recherche par nom ou par e-mail...'
                value={searchTerm}
                onChange={handleSearchChange}
                className='block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />

              {/* Tableau des utilisateurs */}
              <table className='min-w-full divide-y divide-gray-200'>
                <thead>
                  <tr>
                    <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      ID
                    </th>
                    <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Name
                    </th>
                    <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Email
                    </th>
                    <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Role
                    </th>
                    <th className='px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td className='px-6 py-4 whitespace-nowrap'>{user.id}</td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {user.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {user.email}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {user.profiles.map((profile) =>
                          getProfileLabel(profile.id)
                        )}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <a
                          href={route('customer.rgpd', { user: user.id })}
                          className='text-red-600 hover:text-red-900'
                        >
                          RGPD
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className='mt-4 flex justify-between'>
                <div className='w-0 flex-1 flex'>
                  {users.prev_page_url && (
                    <a
                      href={users.prev_page_url}
                      className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                    >
                      Previous
                    </a>
                  )}
                </div>
                <div className='w-0 flex-1 flex justify-end'>
                  {users.next_page_url && (
                    <a
                      href={users.next_page_url}
                      className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                    >
                      Next
                    </a>
                  )}
                </div>
              </div>
              <div className='mt-4 text-sm text-gray-500'>
                Page {users.current_page} of {users.last_page}, Total:{' '}
                {users.total} users
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default UsersPage;
