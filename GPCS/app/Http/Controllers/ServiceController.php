<?php

namespace App\Http\Controllers;

use App\Models\service;
use App\Models\provider_service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function create(Request $request){
        $service = new service();
        $service->categorie='jour';
        $service->nom='guide local';
        dd($service->save());
    }

    public function list(){
        $service = Service::all();
        //dd($service);
        return Inertia::render('Provider/List/List',['service' => $service]);
    }

    public function addProviderPage(){
        $service_provider = new provider_service();
        $service_provider->user_id = 1;
        $service_provider->service_id = 1;
        //dd($service_provider);
        return Inertia::render('Provider/add/add',);
        dd($service_provider->save());
    }

    public function addProvider(){
        $service_provider = new provider_service();
        $service_provider->user_id = 1;
        $service_provider->service_id = 1;
        $service_provider;
    }
}
