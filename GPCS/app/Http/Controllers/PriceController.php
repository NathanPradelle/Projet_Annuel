<?php

namespace App\Http\Controllers;

use App\Models\price_rule;
use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function priceUpdate(Request $request){
        $price = new price_rule();
        //dd($request);
        $price->id_relation_provider_service=$request['id'];
        $price->début_changement_prix=$request['start'];
        
        if($request['PrixRegulier']){
            $price->prix_defaut=$request['PrixRegulier'];
        }
        //dd($price,$request,$request['PrixRegulier']);
        dd($price->save());
    }
}
