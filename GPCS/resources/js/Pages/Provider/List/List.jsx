import React from 'react';

import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const List = ({ service }) => {
  return (
    <AuthenticatedLayout
      head='Welcome'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Liste des ???
        </h2>
      }
    >
      <div>
        <ul>
          {service && service.length > 0 ? (
            service.map((item) => (
              <li key={item.id}>
                {item.categorie} {item.nom}{' '}
                <PrimaryButton>Proposer service</PrimaryButton>
              </li>
            ))
          ) : (
            <li>No services available</li>
          )}
          <br></br>
          <PrimaryButton>Nouveau service</PrimaryButton>
        </ul>
      </div>
    </AuthenticatedLayout>
  );
};

export default List;
