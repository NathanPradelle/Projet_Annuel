<?php

namespace App\Http\Controllers;

use App\Models\Apartment;
use Illuminate\Http\Request;

class TestController extends Controller
{
    //public function (){}

    public function test(){
        var_dump(class_exists(FilePaths::class)); // Vérifie si la classe est chargée
        dd(FilePaths::test()); // Vérifie le résultat de la méthode
        return view('test');
    }
}
