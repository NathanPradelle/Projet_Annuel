import { useEffect } from 'react';
import { t } from 'i18next';

import { Head, Link, useForm } from '@inertiajs/react';

import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import SimpleButton from '@/Components/Buttons/SimpleButton';
import NavBars from '@/Components/NavBars/NavBars';
import SimpleField from '@/Components/SimpleField';

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, errors, reset } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div>
            <Head title="Log in" />
            <NavBars />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <GuestLayout>
                <SimpleField 
                    id="email"
                    type="email"
                    value={data.email}
                    name="Email"
                    onChange={(e) => setData('email', e.target.value)}
                    errorMessage={errors.email}
                />
                <SimpleField 
                    id="password"
                    type="password"
                    value={data.password}
                    name="Mot de passe"
                    onChange={(e) => setData('password', e.target.value)}
                    errorMessage={errors.password}
                />

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                        >
                            {t('login.forgottenPassword')}
                        </Link>
                    )}

                    <SimpleButton className="ms-4" onClick={onSubmit}>
                        {t('common.connection')}
                    </SimpleButton>
                </div>
            </GuestLayout>
        </div>
    );
}

export default Login;