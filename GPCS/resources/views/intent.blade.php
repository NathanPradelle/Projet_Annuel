<?php

$stripe = new \Stripe\StripeClient('sk_test_51N8RtXFpcWCjc9LpF2kn8RkTuJuYfpodITCMxl8ctGv8VtTt2IFfNGIQ9vYw9aC5omZQ9x7Wju6JjfWe4AWN5Scv00UIdU01vc');
$stripe->paymentIntents->create([
  'amount' => 2000,
  'currency' => 'usd',
  'automatic_payment_methods' => ['enabled' => true],
]);
