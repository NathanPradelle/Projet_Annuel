import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ApartmentEditionPage = ({ appartement, tags, auth }) => {
  const [formData, setFormData] = useState({
    name: appartement.name,
    address: appartement.address,
    surface: appartement.surface,
    guestCount: appartement.guestCount,
    roomCount: appartement.roomCount,
    price: appartement.price,
    description: appartement.description,
    tag_id: [],
    image: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, image: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithImages = new FormData();
    formDataWithImages.append('name', formData.name);
    formDataWithImages.append('address', formData.address);
    formDataWithImages.append('surface', formData.surface);
    formDataWithImages.append('guestCount', formData.guestCount);
    formDataWithImages.append('roomCount', formData.roomCount);
    formDataWithImages.append('price', formData.price);
    formDataWithImages.append('description', formData.description);
    formDataWithImages.append('tag_id', JSON.stringify(formData.tag_id));
    formDataWithImages.append('_method', 'PATCH');

    formData.image.forEach((file) => {
      formDataWithImages.append('image[]', file);
    });
    Inertia.post(route('apartment.update', appartement.id), formDataWithImages);
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <div className='max-w-xl mx-auto p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Modifier les informations de votre appartement
        </h2>
        <div className='mt-6'>
          <x-primary-button className='ms-3 mt-5 ml-0'>
            <a href="{{ route('fermeture.index', ['appartement' => $appartement->id]) }}">
              Voir les fermetures de cet appartement
            </a>
          </x-primary-button>
        </div>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
          <div>
            <label htmlFor='name' className='block font-semibold'>
              Titre
            </label>
            <input
              id='name'
              name='name'
              type='text'
              className='mt-1 w-full'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='address' className='block font-semibold'>
              Addresse
            </label>
            <input
              id='address'
              name='address'
              type='text'
              className='mt-1 w-full'
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='surface' className='block font-semibold'>
              Surface (Au mètre carré)
            </label>
            <input
              id='surface'
              name='surface'
              type='number'
              className='mt-1 w-full'
              value={formData.surface}
              onChange={handleChange}
              min='1'
            />
          </div>

          <div>
            <label htmlFor='guestCount' className='block font-semibold'>
              Nombre de personnes
            </label>
            <input
              id='guestCount'
              name='guestCount'
              type='number'
              className='mt-1 w-full'
              value={formData.guestCount}
              onChange={handleChange}
              min='1'
            />
          </div>

          <div>
            <label htmlFor='roomCount' className='block font-semibold'>
              Nombre de pièces
            </label>
            <input
              id='roomCount'
              name='roomCount'
              type='number'
              className='mt-1 w-full'
              value={formData.roomCount}
              onChange={handleChange}
              min='1'
            />
          </div>

          <div>
            <label htmlFor='price' className='block font-semibold'>
              Prix par nuit
            </label>
            <input
              id='price'
              name='price'
              type='number'
              className='mt-1 w-full'
              value={formData.price}
              onChange={handleChange}
              min='1'
            />
          </div>

          <div>
            <label htmlFor='description' className='block font-semibold'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='mt-1 w-full'
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor='tag_id' className='block font-semibold'>
              Ajouter des tags
            </label>
            <select
              id='tag_id'
              name='tag_id[]'
              multiple
              className='chosen-select'
            >
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='image' className='block font-semibold'>
              Ajouter une nouveau image
            </label>
            <input
              id='image'
              name='image[]'
              type='file'
              className='file-input w-full max-w-xs'
              onChange={handleImageChange}
              multiple
            />
          </div>

          <div className='flex space-x-8'>
            {formData.image.map((file, index) => (
              <img
                key={index}
                className='rounded-md mb-3 h-52'
                src={URL.createObjectURL(file)}
                width='200px'
                alt={`${index + 1}`}
              />
            ))}
          </div>

          <button
            type='submit'
            className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          >
            Modifier mon appartement
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default ApartmentEditionPage;
