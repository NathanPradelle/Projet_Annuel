<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class StripeController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        Stripe::setApiKey('sk_test_51N8RtXFpcWCjc9LpF2kn8RkTuJuYfpodITCMxl8ctGv8VtTt2IFfNGIQ9vYw9aC5omZQ9x7Wju6JjfWe4AWN5Scv00UIdU01vc');

        $amount = 10*10;//$request->input('amount');

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'usd',
            ]);

            return response()->json([
                'clientSecret' => $paymentIntent->client_secret,
                //$paymentIntent
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

