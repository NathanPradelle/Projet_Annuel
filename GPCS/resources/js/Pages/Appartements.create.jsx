import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Inertia} from "@inertiajs/inertia";

const CreateAppartForm = ({ tags, auth }) => {
    const { data, setData, post, errors } = useForm({
        name: '',
        address: '',
        surface: '',
        guestCount: '',
        roomCount: '',
        price: '',
        description: '',
        image: [],
        tag_id: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setData(name, files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('appart.store'), data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}>
            <div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                        <label htmlFor="name">Titre</label>
                        <input
                            id="name"
                            className="block mt-1 w-full"
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <div className="text-red-500 mt-2">{errors.name}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="address">Addresse</label>
                        <input
                            id="address"
                            className="block mt-1 w-full"
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={handleChange}
                        />
                        {errors.address && (
                            <div className="text-red-500 mt-2">{errors.address}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="surface">Surface (Au mètre carré)</label>
                        <input
                            id="surface"
                            className="block mt-1 w-full"
                            type="number"
                            name="surface"
                            min="1"
                            value={data.surface}
                            onChange={handleChange}
                        />
                        {errors.surface && (
                            <div className="text-red-500 mt-2">{errors.surface}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="guestCount">Nombre de personnes</label>
                        <input
                            id="guestCount"
                            className="block mt-1 w-full"
                            type="number"
                            name="guestCount"
                            min="1"
                            value={data.guestCount}
                            onChange={handleChange}
                        />
                        {errors.guestCount && (
                            <div className="text-red-500 mt-2">{errors.guestCount}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="roomCount">Nombre de pièces</label>
                        <input
                            id="roomCount"
                            className="block mt-1 w-full"
                            type="number"
                            name="roomCount"
                            min="1"
                            value={data.roomCount}
                            onChange={handleChange}
                        />
                        {errors.roomCount && (
                            <div className="text-red-500 mt-2">{errors.roomCount}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="price">Prix par nuit</label>
                        <input
                            id="price"
                            className="block mt-1 w-full"
                            type="number"
                            name="price"
                            min="1"
                            value={data.price}
                            onChange={handleChange}
                        />
                        {errors.price && (
                            <div className="text-red-500 mt-2">{errors.price}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            className="block mt-1 w-full"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                        />
                        {errors.description && (
                            <div className="text-red-500 mt-2">{errors.description}</div>
                        )}
                    </div>

                    {/* Répétez ce bloc pour chaque champ du formulaire */}

                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ajoutez
                            vos images</label>
                        <input
                            id="image"
                            className="file-input w-full max-w-xs"
                            type="file"
                            name="image"
                            multiple
                            onChange={handleFileChange}
                        />
                        {errors.image && (
                            <div className="text-red-500 mt-2">{errors.image}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="tag_id"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ajoutez des
                            tags</label>
                        <select
                            id="tag_id"
                            className="chosen-select"
                            name="tag_id"
                            multiple
                            value={data.tag_id}
                            onChange={handleChange}
                        >
                            {tags.map((tag) => (
                                <option key={tag.id} value={tag.id}>{tag.name}</option>
                            ))}
                        </select>
                        {errors.tag_id && (
                            <div className="text-red-500 mt-2">{errors.tag_id}</div>
                        )}
                    </div>


                    <button type="submit" className="ms-3 mt-5 ml-0">
                        Créer un appartement
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateAppartForm;
