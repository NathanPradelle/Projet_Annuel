import 'flatpickr/dist/flatpickr.min.css';

import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';
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
  const { data, setData, post, errors } = useForm(service);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      post(route('service.creates', data));
    },
    [data]
  );

  return (
    <AuthenticatedLayout>
      <div>
        <h1>Ajoutez service : </h1>
        <form method='POST' action='/service/create'>
          <input type='hidden' id='id' name='id' value='1' />
          <br />
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
          <SimpleButton className='ms-4' type='submit' onClick={onSubmit}>
            Enregistrer nouveau service
          </SimpleButton>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default ServiceFeePage;
