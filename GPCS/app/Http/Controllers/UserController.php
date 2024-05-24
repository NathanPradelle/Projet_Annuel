<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Validation\Rules;


class UserController extends Controller
{
    #region Get

    /**
     * Get information of one user
    */
    public function get()
    {
        $userId = auth()?->user()?->id;
        $user = User::query(['userProfiles'])->find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $formatUser = $user->formatUser($user);

        return $formatUser;
    }

    #endregion

    public function indexAdmin()
    {
        // Load users
        $users = User::with(['userProfiles' => function ($query) {
            $query->whereIn('profileId', [4, 5]);
        }])->paginate(10);
  
        $formattedUsers = $users->map(function ($user) {
            return $user->formatUser($user);
        });

        return Inertia::render('AdminIndex', [
            'users' => $formattedUsers,
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
        $users = User::with(['userProfiles' => function ($query) {
            $query->whereIn('profileId', [1, 2, 3])
                ->where('email', '!=', null)
                ->where('name', '!=', 'RGPD');
        }])->paginate(10);

        $formattedUsers = $users->map(function ($user) {
            return $user->formatUser($user);
        });

        return Inertia::render('CustomerIndex', [
            'users' => $formattedUsers,
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
