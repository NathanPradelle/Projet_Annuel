import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const MyApartmentsPage = ({ appartements, auth, storagePath }) => {
  const handleDelete = (apartmentId) => {
    const deleteTagUrl = route('apartment.destroy', { apartment: apartmentId });
    Inertia.delete(deleteTagUrl, {
      onSuccess: () => {
        console.log('Apartment deleted successfully');
      },
      onError: (error) => {
        console.error('Failed to delete apartment:', error);
      },
    });
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className='flex justify-center'>
        <div className='grid grid-cols-6 gap-6 w-9/12'>
          {appartements.length > 0 ? (
            appartements.map((appartement) => (
              <div key={appartement.id} className='mt-9 ml-11'>
                <article>
                  {appartement.images.length > 0 ? (
                    <img
                      className='rounded-md'
                      src={storagePath + '/' + appartement.images[0].image}
                      width='100%'
                      style={{ height: '250px' }}
                      alt='Appartement'
                    />
                  ) : (
                    <p>Aucune image disponible</p>
                  )}
                  <h1 className='text-2xl font-extrabold'>
                    {appartement.name}
                  </h1>
                  <p>
                    <span className='font-extrabold'>{appartement.price}€</span>{' '}
                    par nuit
                  </p>
                  {appartement.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className='bg-blue-900 text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-blue-800'
                    >
                      {tag.name}
                    </span>
                  ))}
                </article>
                <div className='flex'>
                  <InertiaLink
                    href={route('apartment.edit', appartement.id)}
                    className='mr-2'
                  >
                    <button className='btn btn-primary'>Editer</button>
                  </InertiaLink>
                  <button
                    onClick={() => handleDelete(appartement.id)}
                    className='btn btn-danger'
                  >
                    Supprimer
                  </button>
                </div>
                <InertiaLink
                  href={route('reservation.showAll', appartement.id)}
                  className='mr-2'
                >
                  <button className='btn btn-primary'>Réservations</button>
                </InertiaLink>
              </div>
            ))
          ) : (
            <div className='py-12'>
              <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6'>
                <div className='p-4 sm:p-8 bg-white shadow sm:rounded-lg flex flex-col items-center'>
                  <p className='text-center text-gray-600 text-lg'>
                    Vous n'avez aucun appartement...
                  </p>
                  <InertiaLink
                    href={route('apartment.create')}
                    className='mt-4'
                  >
                    <button className='btn btn-primary font-bold'>
                      Mettez votte bien à disposition dès maintenant
                    </button>
                  </InertiaLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default MyApartmentsPage;
