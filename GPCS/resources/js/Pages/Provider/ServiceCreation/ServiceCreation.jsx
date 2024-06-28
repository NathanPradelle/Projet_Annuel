import 'flatpickr/dist/flatpickr.min.css';

import { useForm } from '@inertiajs/react';
import { t } from 'i18next';
import React, { useCallback } from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import SimpleField from '@/Components/SimpleField';
import SimpleList from '@/Components/SimpleList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const options = [
  {
    value: 'jour',
    label: 'jour',
    selected: true,
  },
  {
    value: 'distance',
    label: 'distance',
  },
  {
    value: 'variable',
    label: 'variable',
  },
];
const ServiceFeePage = ({ service }) => {
  const { data, setData, post, errors } = useForm({ ...service, categorie: 1 });

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      post(route('service.creates', data));
    },
    [data]
  );

  return (
    <AuthenticatedLayout
      head='Welcome'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          {t('service.create')}
        </h2>
      }
    >
      <div>
        <form method='POST' action='/service/create'>
          <SimpleList
            id='categorie'
            setData={setData}
            label='Profile utilisé'
            options={options}
            styles={{ label: 'nav-input', option: 'nav-option' }}
          />
          <SimpleField
            id='nom'
            type='string'
            value={data.nom}
            label={'nom'}
            onChange={(e) => setData('nom', e.target.value)}
            errorMessage={errors.nom}
            required
          />
          <SimpleButton type='submit' onClick={onSubmit}>
            Enregistrer nouveau service
          </SimpleButton>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default ServiceFeePage;
