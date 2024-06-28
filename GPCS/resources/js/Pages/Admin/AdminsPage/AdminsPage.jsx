import { InertiaLink } from '@inertiajs/inertia-react';

import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import useColumns from './useColumns';

const AdminsPage = ({ users }) => {
  const columns = useColumns();
  return (
    <AuthenticatedLayout
      headTitle='AdminIndex'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Liste Admin
        </h2>
      }
    >
      <div className='py-12'>
        <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
          <div className='p-6 text-gray-900'>
            <InertiaLink
              href={route('admin.create')}
              className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
            >
              Create Admin
            </InertiaLink>
            <Table columns={columns} data={users} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default AdminsPage;
