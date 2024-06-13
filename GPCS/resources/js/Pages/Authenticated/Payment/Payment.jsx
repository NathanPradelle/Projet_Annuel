import { Head } from '@inertiajs/react';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51N8RtXFpcWCjc9LprUhXkYau0AZ4L6JgrVbiHhsRKEXtTuENs45IN7G2nHii9Jnb6gd0jKmC2ZBhLDuPqv2y0U5M007tYSY1YU'
);

const Payment = ({ auth, price, id }) => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // console.log(
    //   'c : ',
    //   fetch('/get-payment-intent/pi_3PR97lFpcWCjc9Lp1yzuaAkH', {
    //     method: 'POST',
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setClientSecret(data.clientSecret);
    //     })
    // );
    setClientSecret(id);
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Payment
        </h2>
      }
    >
      <Head title='Payment' />
      <div className='App'>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default Payment;
