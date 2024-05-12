<?php

namespace App\Http\Controllers;

use App\Models\ApartmentImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApartmentImageController extends Controller
{


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ApartmentImage $appartementImage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ApartmentImage $appartementImage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ApartmentImage $appartementImage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $image = ApartmentImage::findOrFail($id);

        Storage::disk('public')->delete($image->image);

        $image->delete();

        return redirect()->back()->with('success', 'L\'image a été supprimée avec succès.');
    }
}
