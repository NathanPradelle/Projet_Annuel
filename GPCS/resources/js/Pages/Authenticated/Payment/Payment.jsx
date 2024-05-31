import { Head } from '@inertiajs/react';
import axios from 'axios';
import React from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await axios.post('/create-payment-intent', {
    amount: parseFloat(amount),
  });
};

const Payment = ({ auth, price }) => {
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

      <body>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Montant:
              <input
                type='text'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <button type='submit'>Payer</button>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
          {clientSecret && <StripePaymentForm clientSecret={clientSecret} />}
        </div>
        {price}€
        <form action='/create-checkout-session' method='POST'>
          <button type='submit'>Checkout</button>
        </form>
      </body>
    </AuthenticatedLayout>
  );
};

export default Payment;
