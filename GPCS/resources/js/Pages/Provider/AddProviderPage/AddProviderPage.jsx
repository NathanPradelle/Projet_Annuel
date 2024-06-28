import { useForm } from '@inertiajs/react';
import { t } from 'i18next';
import React, { useCallback } from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import SimpleField from '@/Components/SimpleField';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { getCurrentUser } from '@/utils/user';

const AddProviderPage = ({ service, id }) => {
  const currentUser = getCurrentUser();
  console.log(service);
  const { data, setData, post, errors } = useForm({
    ...service,
    user: currentUser,
  });
  console.log(data);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      post(route('service.addprovider.post', data));
    },
    [data]
  );

  return (
    <AuthenticatedLayout>
      <div>
        <h1>Ajout provider : </h1>
        <form>
          <SimpleField
            id='PrixRegulier'
            type='number'
            value={data.PrixRegulier}
            label={'PrixRegulier'}
            onChange={(e) => setData('PrixRegulier', e.target.value)}
            errorMessage={errors.PrixRegulier}
            required
          />
          <SimpleButton className='ms-4' type='submit' onClick={onSubmit}>
            Enregistrer nouveau prix
          </SimpleButton>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default AddProviderPage;
