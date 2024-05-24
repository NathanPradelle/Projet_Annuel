import React from 'react';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const EditTagForm = ({ tag }) => {

    const { data, setData, put, errors } = useForm({
        name: tag.name,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('tag.update', tag.id), {
            onSuccess: () => {
                // Rediriger ou afficher un message de succès
            },
        });
    };

    return (
        <AuthenticatedLayout >
            <div>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="hidden" name="_method" value="PATCH" />

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
                        Modifier un tag
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditTagForm;
