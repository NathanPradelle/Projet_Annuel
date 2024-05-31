import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import {Head, Link} from "@inertiajs/react";
import logoImage from "../../../public/favicon.png";
const Appartements = ({ appartements, auth, storagePath,  laravelVersion, phpVersion }) => {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    return (
        <>
            <Head title="Welcome" />
            <div
                className="bg-gradient-to-br from-gray-800 to-gray-600 text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex flex-col">
                <div className="relative flex-shrink-0 py-10 lg:py-0">
                    <header className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8">
                        <div>
                            <img
                                src={logoImage}
                                alt="Logo"
                                className="h-24 w-auto lg:h-32"
                            />
                        </div>
                        <div className="text-2xl flex items-center">
                            <div
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
                                Paris Caretaker Services
                            </div>
                        </div>
                        <div className="text-2xl flex items-center">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </header>
                    <div class="flex justify-center">
                    <div className="grid grid-cols-6 gap-6 w-9/12">
                        {appartements.data.length > 0 ? (
                            appartements.data.map((appartement) => (
                                <div key={appartement.id} className="mt-9">
                                    <InertiaLink href={route('apartment.show', appartement.id)} className="block">
                                        <article>
                                            {appartement.images.length > 0 ? (
                                                <img
                                                    className="rounded-md"
                                                    src={storagePath + '/' + appartement.images[0].image}
                                                    width="100%"
                                                    style={{ height: "250px" }}
                                                    alt="Appartement"
                                                />
                                            ) : (
                                                <p>Aucune image disponible</p>
                                            )}
                                            <h1 className="text-2xl font-extrabold">{appartement.name}</h1>
                                            <p>{appartement.address}</p>
                                            <p>Loué par {appartement.user.name}</p>
                                            <p><span className="font-extrabold">{appartement.price}€</span> par nuit</p>
                                            {appartement.tags.map((tag) => (
                                                <span key={tag.id}
                                                      className="bg-blue-900 text-blue-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-100 dark:text-blue-800">
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </article>
                                    </InertiaLink>
                                </div>
                            ))
                        ) : (
                            <div className="py-12">
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                                    <div
                                        className="p-4 sm:p-8 bg-white shadow sm:rounded-lg flex flex-col items-center">
                                        <p className="text-center text-gray-600 text-lg">Aucun appartement
                                            disponible...</p>
                                        <InertiaLink href={route('apartment.create')} className="mt-4">
                                            <button className="btn btn-primary">Et si vous proposiez le vôtre ?</button>
                                        </InertiaLink>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </div>

            <div className="flex-grow">
                {/* Contenu principal ici */}
            </div>

            <footer className="py-4 text-center text-sm text-black dark:text-white/70 bg-gray-800">
                Maxime Ahmad Nathan
            </footer>

        </>
)
    ;
};

export default Appartements;
