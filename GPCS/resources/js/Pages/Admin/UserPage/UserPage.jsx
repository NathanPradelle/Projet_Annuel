import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const UserPage = ({ user }) => {
  console.log(user);
  return (
    <AuthenticatedLayout
      headTitle='User'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Clients
        </h2>
      }
    >
      test
    </AuthenticatedLayout>
  );
};

export default UserPage;
