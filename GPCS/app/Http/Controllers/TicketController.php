<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use Illuminate\Http\Request;

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
            ->with(['ticket_category:id,name'])
            ->latest()
            ->paginate(25);

        return response()->json($tickets);
    }

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
}
