import 'flatpickr/dist/flatpickr.min.css';

import { InertiaLink } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';
import { useForm } from '@inertiajs/react';
import { t } from 'i18next';
import React, { useCallback } from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import SimpleDate from '@/Components/SimpleDate';
import SimpleField from '@/Components/SimpleField';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const PagePropositionService = () => {
  window.location.href = '/';
};

const PageNouveauService = () => {
  window.location.href = '/';
};

const demain = new Date();
demain.setDate(new Date().getDate() + 1);

const ServiceFeePage = ({ service }) => {
  const { data, setData, post, errors } = useForm(service);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      post(route('service.provider.price', data));
    },
    [data]
  );

  return (
    <AuthenticatedLayout>
      <div>
        <h1>Changement tarrification : </h1>
        <form method='GET' action='/service/provider/price'>
          <input type='hidden' id='id' name='id' value='1' />
          <SimpleDate
            id='start'
            value={data.start}
            setData={setData}
            label={'date changement de prix'}
            minDate={demain}
            errorMessage={errors.start}
          />
          <SimpleField
            id='PrixRegulier'
            type='number'
            value={data.PrixRegulier}
            label={'prix régulier'}
            onChange={(e) => setData('PrixRegulier', e.target.value)}
            errorMessage={errors.PrixRegulier}
            required
          />
          <SimpleField
            id='PrixSemaine'
            type='number'
            value={data.PrixSemaine}
            label={'prix régulier'}
            onChange={(e) => setData('PrixSemaine', e.target.value)}
            errorMessage={errors.PrixSemaine}
            required
          />
          <SimpleField
            id='PrixWeekend'
            type='number'
            value={data.PrixWeekend}
            label={'prix régulier'}
            onChange={(e) => setData('PrixWeekend', e.target.value)}
            errorMessage={errors.PrixWeekend}
            required
          />
          <SimpleField
            id='PrixFerie'
            type='number'
            value={data.PrixFerie}
            label={'prix régulier'}
            onChange={(e) => setData('PrixFerie', e.target.value)}
            errorMessage={errors.PrixFerie}
            required
          />
          <br />
          <SimpleButton className='ms-4' type='submit' onClick={onSubmit}>
            Enregistrer nouveau prix
          </SimpleButton>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default ServiceFeePage;
