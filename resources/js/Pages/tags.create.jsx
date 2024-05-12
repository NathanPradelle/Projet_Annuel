import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Inertia} from "@inertiajs/inertia";

const CreateTagForm = ({auth}) => {
    const { data, setData, post, errors } = useForm({
        name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('tag.store'), data);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}>
            <div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div>
                        <label htmlFor="name">Nom</label>
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

                    <button type="submit" className="ms-3 mt-5 ml-0">
                        Créer un tag
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateTagForm;
