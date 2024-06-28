import { Head } from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Dashboard = () => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Dashboard
        </h2>
      }
    >
      <Head title='Dashboard' />

      <div className='py-12'>
        <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
          <div className='p-6 text-gray-900'>You're logged in!</div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
