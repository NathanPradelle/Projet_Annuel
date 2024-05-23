<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class FactureController extends Controller
{
    public function client(){
        $pdf = Pdf::loadView('factureclient');
        return $pdf->stream('invoice.pdf');
    }
}
