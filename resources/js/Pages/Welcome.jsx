import { Link, Head } from '@inertiajs/react';
import logoImage from '../../../public/favicon.png';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gradient-to-br from-gray-800 to-gray-600 text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex flex-col">
                <div className="relative flex-shrink-0 py-10 lg:py-0">
                    <header className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8">
                        <div >
                            <img
                                src={logoImage}
                                alt="Logo"
                                className="h-24 w-auto lg:h-32"
                            />
                        </div>
                        <div className="text-2xl flex items-center">
                            <div className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
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
                </div>

                <div className="flex-grow">
                    {/* Contenu principal ici */}
                </div>

                <footer className="py-4 text-center text-sm text-black dark:text-white/70 bg-gray-800">
                    Maxime Ahmad Nathan
                </footer>
            </div>
        </>
    );
}

