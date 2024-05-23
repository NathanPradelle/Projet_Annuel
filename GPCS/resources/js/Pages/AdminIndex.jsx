import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function AdminIndex({ users }) {
    const [editingUserId, setEditingUserId] = useState(null); // Suivre l'ID de l'utilisateur en cours d'édition
    const [editedUserData, setEditedUserData] = useState({}); // Suivre les données éditées pour chaque utilisateur
console.log(users);
    const handleEdit = (userId) => {
        setEditingUserId(userId);
        const userToEdit = users.find(user => user.id === userId);
        setEditedUserData({ ...userToEdit });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Envoi de la requête PATCH avec les données éditées
        const updateUserUrl = route('users.update', { user: editingUserId });
        Inertia.patch(updateUserUrl, editedUserData);
        // Réinitialisation de l'état après sauvegarde
        setEditingUserId(null);
    };

    const handleDelete = (userId) => {
        const deleteUserUrl = route('users.destroy', { user: userId });
        Inertia.delete(deleteUserUrl, {
            onSuccess: () => {
                console.log('User deleted successfully');
            },
            onError: (error) => {
                console.error('Failed to delete user:', error);
            },
        });
    };

    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Liste Admin</h2>} >
            <Head title="AdminIndex"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div
                                className="flex justify-center mb-4"> {/* Ajoutez cette div pour placer le bouton à droite */}
                                <InertiaLink href={route('admin.create')}
                                             className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Create
                                    Admin</InertiaLink>
                            </div>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                <tr>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {editingUserId === user.id ? (
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editedUserData.name}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-300 rounded-md px-2 py-1"
                                                />
                                            ) : (
                                                user.name
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {editingUserId === user.id ? (
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={editedUserData.email}
                                                    onChange={handleInputChange}
                                                    className="border border-gray-300 rounded-md px-2 py-1"
                                                />
                                            ) : (
                                                user.email
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {editingUserId === user.id ? (
                                                <select name="profile" value={editedUserData.profile}
                                                        onChange={handleInputChange}>
                                                    Gestionnaire
                                                    Administrateur
                                                </select>
                                            ) : (
                                                user.profile === 4 ? 'Gestionnaire' : 'Administrateur'
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {editingUserId === user.id ? (
                                                <button onClick={handleSave}
                                                        className="text-indigo-600 hover:text-indigo-900">Save</button>
                                            ) : (
                                                <>
                                                    <button onClick={() => handleEdit(user.id)}
                                                            className="text-indigo-600 hover:text-indigo-900">Edit
                                                    </button>
                                                    <span className="px-2">|</span>
                                                    <button onClick={() => handleDelete(user.id)}
                                                            className="text-red-600 hover:text-red-900">Delete
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className="mt-4 flex justify-between">
                                <div className="w-0 flex-1 flex">
                                    {users.prev_page_url && <a href={users.prev_page_url} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Previous</a>}
                                </div>
                                <div className="w-0 flex-1 flex justify-end">
                                    {users.next_page_url && <a href={users.next_page_url} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">Next</a>}
                                </div>
                            </div>
                            <div className="mt-4 text-sm text-gray-500">
                                Page {users.current_page} of {users.last_page}, Total: {users.total} users
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
