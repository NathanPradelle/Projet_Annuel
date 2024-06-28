import 'flatpickr/dist/flatpickr.min.css';

import { useForm } from '@inertiajs/react';
import { t } from 'i18next';
import React, { useCallback } from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import SimpleDate from '@/Components/SimpleDate';
import SimpleField from '@/Components/SimpleField';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const demain = new Date();
demain.setDate(new Date().getDate() + 1);

const ServiceFeePage = ({ service }) => {
  const { data, setData, post, errors } = useForm({ ...service, categorie: 1 }); // TODO change later
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      post(route('service.provider.price', data));
    },
    [data]
  );

  return (
    <AuthenticatedLayout
      head='Welcome'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Changement tarrification
        </h2>
      }
    >
      <div>
        <form method='GET' action='/service/provider/price'>
          <SimpleDate
            id='start'
            value={data.start}
            setData={setData}
            label={t('service.datePriceChange')}
            minDate={demain}
            errorMessage={errors.start}
          />
          <SimpleField
            id='PrixRegulier'
            type='number'
            value={data.PrixRegulier}
            label={t('service.regularPrice')}
            onChange={(e) => setData('PrixRegulier', e.target.value)}
            errorMessage={errors.PrixRegulier}
            required
          />
          <SimpleField
            id='PrixSemaine'
            type='number'
            value={data.PrixSemaine}
            label={t('service.regularPrice')}
            onChange={(e) => setData('PrixSemaine', e.target.value)}
            errorMessage={errors.PrixSemaine}
            required
          />
          <SimpleField
            id='PrixWeekend'
            type='number'
            value={data.PrixWeekend}
            label={t('service.regularPrice')}
            onChange={(e) => setData('PrixWeekend', e.target.value)}
            errorMessage={errors.PrixWeekend}
            required
          />
          <SimpleField
            id='PrixFerie'
            type='number'
            value={data.PrixFerie}
            label={t('service.regularPrice')}
            onChange={(e) => setData('PrixFerie', e.target.value)}
            errorMessage={errors.PrixFerie}
            required
          />
          <br />
          <SimpleButton onClick={onSubmit}>
            Enregistrer nouveau prix
          </SimpleButton>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default ServiceFeePage;
