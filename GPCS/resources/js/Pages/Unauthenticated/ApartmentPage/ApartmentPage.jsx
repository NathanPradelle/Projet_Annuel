import 'flatpickr/dist/flatpickr.min.css';

import flatpickr from 'flatpickr';
import React, { useEffect } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ApartmentPage = ({
  appartement,
  auth,
  storagePath,
  fermetures,
  intervalles,
  // reservedDates,
}) => {
  useEffect(() => {
    const updateTotalPrice = () => {
      const startTime = new Date(document.getElementById('start_time').value);
      const endTime = new Date(document.getElementById('end_time').value);
      const numberOfPersons = parseInt(
        document.getElementById('nombre_de_personne').value,
        10
      );
      const pricePerNight = parseFloat(appartement.price);

      if (
        !isNaN(startTime) &&
        !isNaN(endTime) &&
        startTime < endTime &&
        numberOfPersons > 0 &&
        !isNaN(pricePerNight)
      ) {
        const numberOfNights = Math.ceil(
          (endTime - startTime) / (1000 * 3600 * 24)
        );
        let totalPrice = numberOfNights * pricePerNight;

        if (numberOfPersons > 1) {
          totalPrice +=
            (numberOfPersons - 1) * 0.1 * pricePerNight * numberOfNights;
        }

        document.getElementById('total_price').innerText =
          totalPrice.toFixed(2) + ' €';
        document.getElementById('prix').value = totalPrice;
        document.getElementById('total_price_container').style.display =
          'block';
      } else {
        document.getElementById('total_price').innerText = '0€';
        document.getElementById('prix').value = '';
        document.getElementById('total_price_container').style.display = 'none';
      }
    };

    const disableReservedDates = () => {
      const start = new Date(document.getElementById('start_time').value);
      const end = new Date(document.getElementById('end_time').value);

      if (end < start) {
        alert('La date de fin ne peut pas être antérieure à la date de début.');
        document.getElementById('end_time').value = '';
        return;
      }
    };

    const estDansIntervalle = (date, intervalles, fermetures) => {
      const currentDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      for (let i = 0; i < intervalles.length; i++) {
        const startDate = new Date(intervalles[i].start_time);
        const endDate = new Date(intervalles[i].end_time);
        const intervalleStartDate = new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          startDate.getDate()
        );
        const intervalleEndDate = new Date(
          endDate.getFullYear(),
          endDate.getMonth(),
          endDate.getDate()
        );
        if (
          currentDate >= intervalleStartDate &&
          currentDate <= intervalleEndDate
        ) {
          return true;
        }
      }
      for (let i = 0; i < fermetures.length; i++) {
        const fermetureStart = new Date(fermetures[i].start_time);
        const fermetureEnd = new Date(fermetures[i].end_time);
        const trueFermetureStart = new Date(
          fermetureStart.getFullYear(),
          fermetureStart.getMonth(),
          fermetureStart.getDate()
        );
        const trueFermetureEnd = new Date(
          fermetureEnd.getFullYear(),
          fermetureEnd.getMonth(),
          fermetureEnd.getDate()
        );
        if (
          currentDate >= trueFermetureStart &&
          currentDate <= trueFermetureEnd
        ) {
          return true;
        }
      }
      return false;
    };

    const demain = new Date();
    demain.setDate(demain.getDate() + 1);

    flatpickr('#start_time', {
      dateFormat: 'Y-m-d',
      minDate: demain,
      disable: [
        function (date) {
          return estDansIntervalle(date, intervalles, fermetures);
        },
      ],
    });

    flatpickr('#end_time', {
      dateFormat: 'Y-m-d',
      minDate: demain,
      disable: [
        function (date) {
          return estDansIntervalle(date, intervalles, fermetures);
        },
      ],
    });

      document.addEventListener('DOMContentLoaded', function() {
          document.getElementById('start_time').addEventListener('change', updateTotalPrice);
          document.getElementById('end_time').addEventListener('change', updateTotalPrice);
          document.getElementById('nombre_de_personne').addEventListener('input', updateTotalPrice);

          document.getElementById('start_time').addEventListener('change', disableReservedDates);
          document.getElementById('end_time').addEventListener('change', disableReservedDates);

          return () => {
              document.getElementById('start_time').removeEventListener('change', updateTotalPrice);
              document.getElementById('end_time').removeEventListener('change', updateTotalPrice);
              document.getElementById('nombre_de_personne').removeEventListener('input', updateTotalPrice);
              document.getElementById('start_time').removeEventListener('change', disableReservedDates);
              document.getElementById('end_time').removeEventListener('change', disableReservedDates);
          };
      });
  }, [appartement.price, intervalles, fermetures]);

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className='flex justify-center'>
        <div className='mt-9 ml-11'>
          <article>
            <h1 className='text-3xl font-extrabold'>{appartement.name}</h1>
            {appartement.images.length > 0 ? (
              appartement.images.map((image, index) => (
                <img
                  key={index}
                  className='rounded-md'
                  src={storagePath + image.image}
                  width='25%'
                  style={{ height: '250px' }}
                  alt='Appartement'
                />
              ))
            ) : (
              <p>Aucune image disponible</p>
            )}
            <div className='flex justify-between mt-5'>
              <div className='mt-1 w-80'>
                {appartement.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='bg-blue-900 text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-blue-800'
                  >
                    {tag.name}
                  </span>
                ))}
                <p className='text-xl'>{appartement.address}</p>
                <p className='text-xl'>Loué par {appartement.user.name}</p>

                <p className='mt-10'>Description</p>
                <div className='border-t-2 border-grey overflow-x-auto'>
                  <p className='text-xl'>{appartement.description}</p>
                </div>
              </div>
              <div className='p-4 sm:p-8 ml-20 bg-white sm:rounded-lg shadow-xl'>
                <p className='text-xl'>
                  <span className='font-extrabold'>{appartement.price}€</span>{' '}
                  par nuit
                </p>

                <form method='POST' action={route("reservation.store")}>
                  <input
                    type='hidden'
                    name='appartement_id'
                    value={appartement.id}
                  />

                  <div className='mb-4'>
                    <label
                      htmlFor='start_time'
                      className='block text-gray-700 text-sm font-bold mb-2'
                    >
                      Date de début :
                    </label>
                    <input
                      type='date'
                      name='start_time'
                      id='start_time'
                      min={new Date().toISOString().split('T')[0]}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      htmlFor='end_time'
                      className='block text-gray-700 text-sm font-bold mb-2'
                    >
                      Date de fin :
                    </label>
                    <input
                      type='date'
                      name='end_time'
                      id='end_time'
                      min={
                        new Date(new Date().setDate(new Date().getDate() + 1))
                          .toISOString()
                          .split('T')[0]
                      }
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      htmlFor='nombre_de_personne'
                      className='block text-gray-700 text-sm font-bold mb-2'
                    >
                      Nombre de personnes :
                    </label>
                    <input
                      type='number'
                      name='nombre_de_personne'
                      id='nombre_de_personne'
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      min='1'
                      max={appartement.guestCount}
                    />
                  </div>

                  <div
                    className='mb-4'
                    id='total_price_container'
                    style={{ display: 'none' }}
                  >
                    <p>
                      Total : <span id='total_price'>0 €</span>
                    </p>
                    <input type='hidden' name='prix' id='prix' />
                  </div>

                  <div className='mb-4'>
                    <button
                      type='submit'
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                      Réserver
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </article>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ApartmentPage;
