<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Inertia\Inertia;
use Inertia\Response;

class StripeController extends Controller
{
    public function createPaymentIntent()
    {
        Stripe::setApiKey('sk_test_51N8RtXFpcWCjc9LpF2kn8RkTuJuYfpodITCMxl8ctGv8VtTt2IFfNGIQ9vYw9aC5omZQ9x7Wju6JjfWe4AWN5Scv00UIdU01vc');

        $amount = 10*10;//$request->input('amount');

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur',
            ]);

            $output = [
                'clientSecret' => $paymentIntent->client_secret,
            ];

            return response()->json([
                'clientSecret' => $paymentIntent->client_secret,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function capturePaymentIntent($id){
        $stripe = new \Stripe\StripeClient('sk_test_51N8RtXFpcWCjc9LpF2kn8RkTuJuYfpodITCMxl8ctGv8VtTt2IFfNGIQ9vYw9aC5omZQ9x7Wju6JjfWe4AWN5Scv00UIdU01vc');
        //Stripe::setApiKey('sk_test_51N8RtXFpcWCjc9LpF2kn8RkTuJuYfpodITCMxl8ctGv8VtTt2IFfNGIQ9vYw9aC5omZQ9x7Wju6JjfWe4AWN5Scv00UIdU01vc');
        try {
        return $stripe->paymentIntents->retrieve($id, []);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    //public function PaymentMethode($intent){}

    public function payment(){
        $price = 100;

        $id = $this->capturePaymentIntent('pi_3PR97lFpcWCjc9Lp1yzuaAkH'); //test to edit
        return Inertia::render('Authenticated/Payment/Payment', [
            'price' => $price,
            'id' => $id->id
        ]);
    }
}

