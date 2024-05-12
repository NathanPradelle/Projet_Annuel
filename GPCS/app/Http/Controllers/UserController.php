<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rules;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(){

    }

    public function indexAdmin()
    {
        $users = User::query()

            ->select('id','name','email','role')
            ->where('role', '=', 4)
            ->orWhere('role', '=', 5)
            ->paginate(10);

        return Inertia::render('AdminIndex', [
            'users' => $users,
        ]);
    }

    public function CreateAdmin()
    {
        return Inertia::render('CreateAdmin');
    }

    public function StoreAdmin(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        event(new Registered($user));

        return redirect(route('users.admin', absolute: false));
    }

    public function indexCustomer()
    {
        $users = User::query()

            ->select('id','name','email','role')
            ->where('email', '!=', null)
            ->where('name', '!=', 'RGPD')
            ->where(function($query) {
                $query->where('role', '=', 1)
                    ->orWhere('role', '=', 2)
                    ->orWhere('role', '=', 3);
            })
            ->paginate(10);

        return Inertia::render('CustomerIndex', [
            'users' => $users,
        ]);
    }

    public function RGPDCustomer(User $user)
    {
        $user->update([
            'name'=>'RGPD',
            'email'=> null,
        ]);

        return redirect()->route('users.customer');
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
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $user->update([
            'name' => $request['name'],
            'email' => $request['email'],
            'role' => $request['role'],
        ]);

        return redirect()->back()->with('success', 'User updated successfully.');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.admin')->with('success', 'L\'utilisateur '.$user->name.' a bien été supprimé');
    }
}
