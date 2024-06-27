import { t } from 'i18next';
import React from 'react';

import SimpleButton from '@/Components/Buttons/SimpleButton';

const ApartmentWindow = ({ apartment, storagePath }) => {
  return (
    <div
      key={apartment?.id}
      className='apartment-window flex flex-col items-center'
    >
      {apartment?.images?.length > 0
        ? apartment?.images.map((image) => (
            <img
              key={image.id}
              src={storagePath + image.image}
              className='rounded-md'
              alt='Apartment'
            />
          ))
        : t('apartment.noPictureAvailable')}
      <h1 className='text-2xl font-extrabold'>{apartment?.name}</h1>
      <p>{apartment?.address}</p>
      <p>Loué par {apartment?.user?.name}</p>
      <p>
        <span className='font-extrabold'>
          {apartment?.price}€ {t('apartment.perNight')}
        </span>
      </p>
      {apartment?.tags?.map((tag) => (
        <span
          key={tag.id}
          className='bg-blue-900 text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-blue-800'
        >
          {tag.name}
        </span>
      ))}
      <SimpleButton className='ms-4' to={route('apartment.show', apartment.id)}>
        {t('common.details')}
      </SimpleButton>
    </div>
  );
};

export default ApartmentWindow;
