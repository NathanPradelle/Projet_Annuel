import { Head } from '@inertiajs/react';

import { PROFILE, USER_PROFILES } from '@/Constants/profiles';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { getCurrentUser } from '@/utils/user';

import DeleteUserForm from './Components/DeleteUserForm';
import UpdatePasswordForm from './Components/UpdatePasswordForm';
import UpdateProfileInformationForm from './Components/UpdateProfileInformationForm';

const ProfileEditionPage = ({ mustVerifyEmail, status }) => {
  const currentUser = getCurrentUser();

  return (
    <AuthenticatedLayout
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Profile
        </h2>
      }
    >
      <Head title='Profile' />

      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6'>
          {!currentUser.profiles.some(
            (profile) => profile.id == PROFILE.MANAGEMENT
          ) && (
            <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
              <UpdateProfileInformationForm
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className='max-w-xl'
              />
            </div>
          )}

          <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
            <UpdatePasswordForm className='max-w-xl' />
          </div>

          {currentUser.profiles.some((profile) =>
            USER_PROFILES.includes(profile.id)
          ) && (
            <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
              <DeleteUserForm className='max-w-xl' />
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ProfileEditionPage;
