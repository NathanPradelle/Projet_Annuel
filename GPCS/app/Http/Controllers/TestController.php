<?php

namespace App\Http\Controllers;

use App\Models\Apartment;
use Illuminate\Http\Request;

class TestController extends Controller
{
    //public function (){}

    public function test(){
        $appartement = Apartment::all();
        dd($appartement);
        return view('test');
    }
}
