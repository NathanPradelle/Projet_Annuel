import React from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ServicesPage = ({ service }) => {
  console.log(service);

  return (
    <AuthenticatedLayout
      head='Welcome'
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Service List
        </h2>
      }
    >
      <div>
        <ul>
          {service && service.length > 0 ? (
            service.map((item) => (
              <li key={item.id}>
                <br />
                <input type='hidden' id='id' name='id' value={item.id}></input>
                {item.categorie} {item.nom}{' '}
                <SimpleButton to={route('service.provider.add', item.id)}>
                  Proposer service
                </SimpleButton>
              </li>
            ))
          ) : (
            <li>No services available</li>
          )}
          <br />
          <SimpleButton to={route('service.create')}>
            Nouveau service
          </SimpleButton>
        </ul>
      </div>
    </AuthenticatedLayout>
  );
};

export default ServicesPage;
