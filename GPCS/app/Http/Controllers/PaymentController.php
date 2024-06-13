<?php

namespace App\Http\Controllers;

use App\Http\Controllers\StripeController;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;


class PaymentController extends Controller
{
    public function payment()
    {
        $price = 100;

        $id = capturePaymentIntent();
        var_dump($id);
        return Inertia::render('Authenticated/Payment/Payment', [
            'price' => $price,
        ]);
    }
}
