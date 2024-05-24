import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Inertia} from "@inertiajs/inertia";
import {InertiaLink} from "@inertiajs/inertia-react";

export default function TagManagementPage ({ tags }){
    const handleDelete = (tagId) => {
        const deleteTagUrl = route('tag.destroy', { tag: tagId });
        Inertia.delete(deleteTagUrl, {
            onSuccess: () => {
                console.log('Tag deleted successfully');
            },
            onError: (error) => {
                console.error('Failed to delete Tag:', error);
            },
        });
    };

    return (
        <AuthenticatedLayout >
            <div>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Gestion des tags
                </h2>

                <InertiaLink href={route('tag.create')}
                             className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Create
                    tag</InertiaLink>

                <div className="flex justify-center">
                    {tags.data.length > 0 ? (
                        tags.data.map((tag) => (
                            <div key={tag.id} className="mt-9">
                                <p>{tag.name}</p>
                                <a href={route('tag.edit', tag.id)} className="mr-2">
                                    <button className="btn btn-primary">Editer</button>
                                </a>
                                <button onClick={() => handleDelete(tag.id)}
                                        className="text-red-600 hover:text-red-900">Supprimer
                                </button>
                        </div>
                        ))
                        ) : (
                        <p>Il n'y a pas encore de tag</p>
                        )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
