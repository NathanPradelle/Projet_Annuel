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
        <h1>Service List</h1>
        <ul>
          {service && service.length > 0 ? (
            service.map((item) => (
              <li key={item.id}>
                {item.categorie} {item.nom}{' '}
                <PrimaryButton
                  className='ms-4'
                  onClick={PagePropositionService}
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

export default List;
