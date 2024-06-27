import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const PagePropositionService = () => {
  window.location.href = '/';
};

const PageNouveauService = () => {
  window.location.href = '/';
};

const List = ({ service }) => {
  return (
    <AuthenticatedLayout>
      <div>
        <h1>Changement tarrification : </h1>
        <form method='POST' action='/service/provider/price'>
          <input type='hidden' id='id' name='id' value='1' />
          <div>
            <label htmlFor='start'>date changement de prix:</label>
            <input type='date' id='start' name='start' />
          </div>

          <label htmlFor='PrixRegulier'>prix régulier:</label>
          <input
            type='number'
            id='PrixRegulier'
            name='PrixRegulier'
            min='10'
            max='100'
          />
          <label htmlFor='PrixSemaine'>prix semaine:</label>
          <input
            type='number'
            id='PrixSemaine'
            name='PrixSemaine'
            min='10'
            max='100'
          />
          <label htmlFor='PrixWeekend'>prix weekend:</label>
          <input
            type='number'
            id='PrixWeekend'
            name='PrixWeekend'
            min='10'
            max='100'
          />
          <label htmlFor='PrixFerie'>prix jour férié:</label>
          <input
            type='number'
            id='PrixFerie'
            name='PrixFerie'
            min='10'
            max='100'
          />
          <input type='submit' value='Send Request' />
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default List;
