import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

import PrimaryButton from '@/Components/Buttons/PrimaryButton';
import SimpleButton from '@/Components/Buttons/SimpleButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const PagePropositionService = (id) => {
  window.location.href = `/service/addprovider/${id}`;
};

const PageNouveauService = () => {
  window.location.href = '/service/create/page';
};

const ServicesPage = ({ service }) => {
  console.log(service);
  return (
    <AuthenticatedLayout>
      <div>
        <h1>Service List</h1>
        <ul>
          {service && service.length > 0 ? (
            service.map((item) => (
              <li key={item.id}>
                <br />
                <input type='hidden' id='id' name='id' value={item.id}></input>
                {item.categorie} {item.nom}{' '}
                <PrimaryButton
                  className='ms-4'
                  onClick={() => PagePropositionService(item.id)}
                >
                  Proposer service
                </PrimaryButton>
              </li>
            ))
          ) : (
            <li>No services available</li>
          )}
          <br></br>
          <PrimaryButton className='ms-4' onClick={PageNouveauService}>
            Nouveau service
          </PrimaryButton>
        </ul>
      </div>
    </AuthenticatedLayout>
  );
};

export default ServicesPage;
