<?php

namespace App\Http\Controllers;

use App\Models\service;
use App\Models\provider_service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use FilePaths;

class ServiceController extends Controller
{
    public function create_page(){
        return Inertia::render(FilePaths::SERVICE_CREATE);
    }
    public function create(Request $request){
        $service = new service();
        $service->categorie=$request['categorie'];
        $service->nom=$request['nom'];
        dd($service->save());
    }

    public function list(){
        $service = Service::all();
        //dd($service);
        return Inertia::render(FilePaths::SERVICE, ['service' => $service]);
    }

    public function addprovider($id){
        return Inertia::render(FilePaths::SERVICE_ADD_PROVIDER, ['id' => $id]);
    }

    public function addProviderPage(Request $request){
        //dd($request);
        $service_provider = new provider_service();
        $service_provider->user_id = $request['user_id'];
        $service_provider->service_id = $request['service_id'];
        //dd($service_provider);
        return Inertia::render(FilePaths::SERVICE_FEE,);
        dd($service_provider->save());
    }

    public function addProviderVerif(Request $request){
        $service_provider = new provider_service();
        dd($request);
        $service_provider->user_id = 1;
        $service_provider->service_id = 1;
        $service_provider;
    }
}
