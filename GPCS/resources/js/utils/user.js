import { usePage } from '@inertiajs/react';

export const getCurrentUser = () => {
    return usePage().props?.auth?.currentUser;
}