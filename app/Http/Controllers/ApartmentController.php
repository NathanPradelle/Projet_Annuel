<?php

namespace App\Http\Controllers;

use App\Models\Apartment;
use App\Models\ApartmentImage;
use App\Models\ClosedPeriod;
use App\Models\Reservation;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ApartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function list()
    {

        $appartements = Apartment::query()
            ->select(['id', 'name', 'address', 'price', 'image', 'user_id'])
            ->latest()
            ->with(['user:id,name'])
            ->with(['tags' => function ($query) {
                $query->select('tags.*');   //pour filtrer si des appartements ont des tag ou non
            }])
            ->with(['images:*'])
            ->paginate(10);

        $storagePath = Storage::url('/');

        return Inertia::render('Apartment.List', [
            'appartements' => $appartements,
            'storagePath' => $storagePath
        ]);


        /* $appartements = Appartement::with('tags','images','user');
         return view('appartements.index', [
             'appartements' => $appartements
         ]);
         */
    }

    public function index()
    {
        $user = Auth::user();
        $appartements = $user->apartments()->with(['images', 'tags'])->get();

        $storagePath = Storage::url('/');

        return Inertia::render('ApartmentIndex', [
            'appartements' => $appartements,
            'storagePath' => $storagePath
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tags = Tag::all()->where("user_id", Auth()->id());
        return Inertia::render('Appartements.create',[
            'tags' => $tags
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'name' => ['required', 'max:255', 'regex:/^[a-zA-Z\s]*$/'],
            'address' => ['required', 'max:255'],
            'surface' => ['required', 'numeric'],
            'guestCount' => ['required', 'numeric'],
            'roomCount' => ['required', 'numeric'],
            'description' => ['required', 'max:255'],
            'price' => ['required', 'numeric'],
            'image' => ['array'],
            'image.*' => ['image'],
            'tag_id' => ['array']
        ]);

        unset($validateData['image']);

        $validateData['user_id'] = Auth()->id();

        $appartement = new Apartment($validateData);

        $appartement->user()->associate($validateData['user_id']);
        $appartement->save();
        if(isset($validateData['tag_id'])){
            $appartement->tags()->sync($validateData['tag_id']);
        }

        if ($request->hasFile('image')) {
            $images = $request->file('image');

            foreach ($images as $image) {
                $path = $image->store('imagesAppart', 'public');

                $appartementImage = new ApartmentImage();
                $appartementImage->image = $path;
                $appartementImage->apartment_id = $appartement->id;
                $appartementImage->save();
            }
        }


        return redirect()->route('dashboard')
            ->with('success', "Appartement créé avec succès");
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $appartement = Apartment::with(['user:id,name'])->with(['images:*'])->with(['tags:*'])->findOrFail($id);
//            ->with(['user:id,name'])

        $intervalle = Reservation::where("apartment_id", $appartement->id)
            ->select("start_time","end_time")
            ->get();

        $fermeture = ClosedPeriod::where("apartment_id", $appartement->id)
            ->select("start_time","end_time")
            ->get();

        // Récupérer les dates déjà réservées pour cet appartement
        $reservedDates = Reservation::where('apartment_id', $appartement->id)
            ->get() // Récupérez toutes les réservations
            ->map(function ($reservation) {
                return [
                    'start' => Carbon::parse($reservation->start_time)->toDateString(),
                    'end' => Carbon::parse($reservation->end_time)->toDateString(),
                ];
            })
            ->toArray();

        $storagePath = Storage::url('/');

        return Inertia::render('Apartment.show', [
            'appartement' => $appartement,
            'fermetures' => $fermeture,
            'intervalles' => $intervalle,
            'reservedDates' => $reservedDates,
            'storagePath' => $storagePath
        ]);
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {

        $appartement = Apartment::findOrFail($id);
        //        Gate::authorize('update', $appartement);
        $tags = Tag::all()->where("user_id", Auth()->id());
        return Inertia::render('Apartment.edit', [
            'appartement' => $appartement,
            'tags' => $tags
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $appartement = Apartment::findOrFail($id);

//        Gate::authorize('update', $appartement);

        $validatedData = $request->validate([
            'name' => ['required', 'string'],
            'address' => ['required', 'max:255'],
            'surface' => ['required', 'numeric', 'min:0'],
            'guestCount' => ['required', 'numeric', 'min:0'],
            'roomCount' => ['required', 'numeric', 'min:0'],
            'description' => ['required', 'max:255'],
            'price' => ['required', 'numeric', 'min:0'],
            'image' => ['array'],
            'image.*' => ['image'],
            'tag_id' => ['array'],
        ]);


        unset($validatedData['image']);

        if ($request->hasFile('image')) {
            $images = $request->file('image');

            $appartementImages = ApartmentImage::where('apartment_id', $appartement->id)->get();

            if($appartementImages->count() >= 4) {
                return redirect()->route('apartment.edit', $appartement->id)
                    ->with('error', "Il y a déjà 4 images pour votre appartement. Pour en ajouter une nouvelle, veuillez en supprimer une autre.");
            }

            foreach ($images as $image) {
                $path = $image->store('imagesAppart', 'public');

                $appartementImage = new ApartmentImage();
                $appartementImage->image = $path;
                $appartementImage->apartment_id = $appartement->id;
                $appartementImage->save();
            }
        }

        $appartement->update($validatedData);

        if(isset($validatedData['tag_id'])){
            $appartement->tags()->sync($validatedData['tag_id']);
        } else {
            $appartement->tags()->detach();
        }

        return redirect()->route('apartment.index', $appartement->id)
            ->with('success', "Appartement mis à jour avec succès");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) : RedirectResponse
    {
        $appartement = Apartment::findOrFail($id);

//        Gate::authorize('delete', $appartement);

        $appartement->delete();

        return redirect()->route('apartment.index');
    }

    public function destroyImg($id) : RedirectResponse {
        $appartementImages = ApartmentImage::findOrFail($id);

        $appartementImages->delete();

        return redirect()->route('apartment.edit', $appartementImages->appartement_id)
            ->with('success', "Appartement mis à jour avec succès");
    }
}
