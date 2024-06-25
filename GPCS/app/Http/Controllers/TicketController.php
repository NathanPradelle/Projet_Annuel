<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use FilePaths;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tickets = Ticket::query()
            ->select(['id', 'objet', 'description'])
            ->with(['user:id,name'])
            ->with(['ticketCategory:id,name'])
            ->latest()
            ->paginate(25);

        return response()->json($tickets);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(FilePaths::TICKET);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validateData = $request->validate([
            'category' => 'required|integer|in:1,2,3,4',
            'subject' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $validateData['user_id'] = Auth()->id();


        $ticket = new Ticket();
        $ticket->user()->associate($validateData['user_id']);
        $ticket->ticket_category_id = $validateData['category'];
        $ticket->objet = $validateData['subject'];
        $ticket->description = $validateData['description'];
        $ticket->save();

        return redirect()->route('dashboard')->with('success', 'Ticket créé avec succès!');
    }


    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ticket $ticket)
    {
        //
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $ticket = Ticket::findOrFail($id);

        if (!$ticket) {
            return response()->json([
                'message' => 'Ticket not found',
            ], 404);
        }

        $ticket->delete();

        return response()->json([
            'message' => 'Ticket deleted successfully',
        ], 200);
    }
    public function contact()
    {
        return Inertia::render(FilePaths::CONTACT);
    }
}
