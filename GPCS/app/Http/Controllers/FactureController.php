<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Facture;
use App\Models\Service;

use Dompdf\Dompdf;


use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class FactureController extends Controller
{
    public function client(){
        $pdf = Pdf::loadView('factureclient');
        return $pdf->stream('invoice.pdf');
        return view('factureclient');
    }
}
