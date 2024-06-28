import { Head, Link, useForm } from '@inertiajs/react';
import { t } from 'i18next';
import { useEffect } from 'react';

import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import SimpleField from '@/Components/SimpleField';
import GuestLayout from '@/Layouts/GuestLayout/GuestLayout';

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <GuestLayout>
      <Head title='Register' />

      <form onSubmit={submit}>
        <SimpleField
          id='name'
          value={data.name}
          label={t('common.name')}
          onChange={(e) => setData('name', e.target.value)}
          errorMessage={errors.name}
          required
        />

        <SimpleField
          id='email'
          type='email'
          value={data.email}
          label={t('common.email')}
          onChange={(e) => setData('email', e.target.value)}
          errorMessage={errors.email}
          required
        />

        <SimpleField
          id='password'
          type='password'
          value={data.password}
          label={t('signIn.password.label')}
          onChange={(e) => setData('password', e.target.value)}
          errorMessage={errors.password}
          required
        />

        <SimpleField
          id='password_confirmation'
          type='password'
          value={data.password_confirmation}
          label={t('signIn.password.confirmLabel')}
          onChange={(e) => setData('password_confirmation', e.target.value)}
          errorMessage={errors.password_confirmation}
          required
        />

        <div className='flex items-center justify-end mt-4'>
          <Link
            href={route('login')}
            className='underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            {t('signIn.alreadyRegistered')}
          </Link>

          <PrimaryButton disabled={processing}>
            {t('signIn.label')}
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Register;
