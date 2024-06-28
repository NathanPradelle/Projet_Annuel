import { useForm } from '@inertiajs/react';
import { t } from 'i18next';
import React, { useCallback, useMemo } from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';
import SimpleDate from '@/Components/SimpleDate';
import SimpleField from '@/Components/SimpleField';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { dateDiffInDays } from '@/utils/date';

const demain = new Date();
demain.setDate(new Date().getDate() + 1);

const ApartmentPage = ({
  apartment,
  auth,
  storagePath,
  // fermetures,
  // intervalles,
  // reservedDates,
}) => {
  const { data, setData, post, errors } = useForm(apartment);
  const totalPrice = useMemo(() => {
    if (data?.dateStart && data?.dateEnd && data?.guestCount > 0) {
      return data?.price * dateDiffInDays(data?.dateStart, data?.dateEnd);
    }

    return 0;
  }, [data]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      post(route('reservation.store', data));
    },
    [data]
  );

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className='flex justify-center'>
        <article>
          <h1 className='text-3xl font-extrabold'>{apartment.name}</h1>
          {apartment.images.length > 0 ? (
            apartment.images.map((image, index) => (
              <img
                key={index}
                className='rounded-md'
                src={storagePath + image.image}
                width='25%'
                style={{ height: '250px' }}
                alt='apartment'
              />
            ))
          ) : (
            <p>Aucune image disponible</p>
          )}
          <div className='flex justify-between mt-5'>
            <div className='mt-1 w-80'>
              {apartment.tags.map((tag, index) => (
                <span
                  key={index}
                  className='bg-blue-900 text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-blue-800'
                >
                  {tag.name}
                </span>
              ))}
              <p className='text-xl'>{apartment.address}</p>
              <p className='text-xl'>Loué par {apartment.user.name}</p>

              <p className='mt-10'>Description</p>
              <div className='border-t-2 border-grey overflow-x-auto'>
                <p className='text-xl'>{apartment.description}</p>
              </div>
            </div>
            <div className='p-4 sm:p-8 ml-20 bg-white sm:rounded-lg shadow-xl'>
              <p className='text-xl'>
                <span className='font-extrabold'>{apartment.price}€</span>{' '}
                {t('apartment.perNight')}
              </p>

              <form>
                <input type='hidden' name='apartment_id' value={apartment.id} />

                <SimpleDate
                  id='dateStart'
                  value={data.dateStart}
                  setData={setData}
                  label={t('common.dateStart')}
                  minDate={demain}
                  errorMessage={errors.dateStart}
                />

                <SimpleDate
                  id='dateEnd'
                  value={data.dateEnd}
                  setData={setData}
                  label={t('common.dateEnd')}
                  minDate={demain}
                  errorMessage={errors.dateEnd}
                />

                <SimpleField
                  id='guestCount'
                  type='number'
                  value={data.guestCount}
                  max={apartment.guestCount}
                  label={t('apartment.nbPeople')}
                  onChange={(e) => setData('guestCount', e.target.value)}
                  errorMessage={errors.guestCount}
                  required
                />

                <div className='mb-4' id='total_price_container'>
                  <p>
                    Total : <span id='total_price'>{totalPrice} €</span>
                  </p>
                  <input type='hidden' name='prix' id='prix' />
                </div>

                <SimpleButton onClick={onSubmit}>
                  {t('apartment.rent')}
                </SimpleButton>
              </form>
            </div>
          </div>
        </article>
      </div>
    </AuthenticatedLayout>
  );
};

export default ApartmentPage;
