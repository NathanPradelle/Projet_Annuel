import { Head, Link, useForm } from '@inertiajs/react';
import { t } from 'i18next';
import { useEffect } from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import SimpleCheckbox from '@/Components/SimpleCheckbox';
import SimpleField from '@/Components/SimpleField';
import GuestLayout from '@/Layouts/GuestLayout';

const Login = ({ status, canResetPassword }) => {
  const { data, setData, post, errors, reset } = useForm();

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    post(route('login'));
  };

  return (
    <GuestLayout>
      <Head title='Log in' />

      {status && (
        <div className='mb-4 font-medium text-sm text-green-600'>{status}</div>
      )}

      <form onSubmit={onSubmit}>
        <SimpleField
          id='email'
          type='email'
          value={data.email}
          label='Email'
          onChange={(e) => setData('email', e.target.value)}
          errorMessage={errors.email}
        />
        <SimpleField
          id='password'
          type='password'
          value={data.password}
          label='Mot de passe'
          onChange={(e) => setData('password', e.target.value)}
          errorMessage={errors.password}
        />
        <SimpleCheckbox
          id='remember'
          className='flex gap-0_5 mt-2'
          value={data.remember}
          label='Remember me'
          onChange={(e) => setData('remember', e.target.checked)}
          errorMessage={errors.password}
        />

        <div className='flex items-center justify-end'>
          {canResetPassword && (
            <Link href={route('password.request')}>
              {t('login.forgottenPassword')}
            </Link>
          )}

          <SimpleButton className='ms-4' onClick={onSubmit}>
            {t('common.connection')}
          </SimpleButton>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Login;
