import { useForm } from '@inertiajs/react';
import axios from 'axios';
import { t } from 'i18next';
import { useEffect, useMemo, useState } from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import InputListMultiple from '@/Components/InputListMultiple';
import SimpleField from '@/Components/SimpleField';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { getProfileLabel } from '@/utils/user';

const UserPage = ({ user }) => {
  const { data, setData, post, errors } = useForm(user);
  const [disabled, setDisabled] = useState(true);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get(route('profile.get'))
      .then((res) => setProfiles(res.data))
      .catch((err) => {
        console.error('Error fetching profiles:', err);
      });
  }, []);

  const profilesOptions = useMemo(
    () =>
      profiles?.map((profile) => {
        return {
          value: profile?.id,
          label: getProfileLabel(profile?.id),
          selected: !!user?.profiles?.find((e) => e?.id == profile?.id),
        };
      }),
    [profiles]
  );

  const onSubmit = (e) => {
    e.preventDefault();

    post(route('register'));
  };

  return (
    <AuthenticatedLayout
      headTitle='User'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          {t('common.client')}: {user?.name}
        </h2>
      }
    >
      <SimpleButton className='ms-4' onClick={() => setDisabled(!disabled)}>
        {t('common.modify')}
      </SimpleButton>

      <form onSubmit={onSubmit}>
        <SimpleField
          id='name'
          value={data.name}
          label={t('common.name')}
          onChange={(e) => setData('name', e.target.value)}
          errorMessage={errors.name}
          required
          disabled={disabled}
        />

        <SimpleField
          id='email'
          type='email'
          value={data.email}
          label={t('common.email')}
          onChange={(e) => setData('email', e.target.value)}
          errorMessage={errors.email}
          required
          disabled={disabled}
        />

        <InputListMultiple
          id='baf'
          setData={setData}
          label="Profils de l'utilisateur"
          options={profilesOptions}
          disabled={disabled}
        />

        <SimpleButton className='ms-4' type='submit' disabled={disabled}>
          {t('common.save')}
        </SimpleButton>
      </form>
    </AuthenticatedLayout>
  );
};

export default UserPage;
