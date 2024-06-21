<?php

namespace App\Http\Controllers;

use App\Models\User;
use FilePaths;
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
        public function getForMiddleware()
    {
        $user = User::find(auth()->id());

        // $user = User::query(['userProfiles'])->find($userId);
        if (!$user) {
            return null;
        }

        $formatUser = $user->formatUser();

        return $formatUser;
    }

    public function profileToUse(Request $profile)
    {
        $user = User::find(auth()->id());

        $profileExists = $user->userProfiles->contains('profile', $profile->id);

        if (!$profileExists) {
            return response()->json(['error' => 'Unauthorized or profile not found'], 403);
        }

        $user->profile_in_use = $profile->id;
        
        $user->save();

        return response()->json($user->formatUser(), 200);
    }

    #endregion

    public function indexAdmin()
    {
        // Load users
        $users = User::with(['userProfiles' => function ($query) {
            $query->whereIn('profile', [4, 5]);
        }])->paginate(10);

        $formattedUsers = $users->map(function ($user) {
            return $user->formatUser();
        });

        return Inertia::render(FilePaths::ADMINS_PAGE, [
            'users' => $formattedUsers,
        ]);
    }

    public function CreateAdmin()
    {
        return Inertia::render(FilePaths::ADMIN_CREATION);
    }

    public function user($id)
    {
        $user = User::find($id);

        if (is_null($user)) {
            return null; // response()->json(['error' => 'User not found'], 404);
        }

        return Inertia::render(FilePaths::USER, [
            'user' => $user->formatUser(),
        ]);
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
        // Ta fonction elle fais 2 requetes, renvoyant le résultat de la mauvaise
        // $users = User::with(['userProfiles' => function ($query) {
        //     $query->whereIn('profile', [1, 2, 3])
        //         ->where('email', '!=', null)
        //         ->where('name', '!=', 'RGPD');
        // }])->paginate(10);

        $users = User::join('user_profiles', 'users.id', '=', 'user_profiles.user')
        ->whereIn('user_profiles.profile', [1, 2, 3])
        ->distinct()
        ->paginate(10);

        $formattedUsers = $users->map(function ($user) {
            return $user->formatUser();
        });

        return Inertia::render(FilePaths::USERS, [
            'users' => $formattedUsers,
        ]);
    }

    public function RGPDCustomer(User $user)
    {
        $user->update([
            'name'=>'RGPD',
            'email'=> null,
        ]);

        return redirect()->route('users');
    }

    /**
     * Update a specific user.
     */
    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'profiles' => 'required|array|min:1'
        ]);

        $user = new User();
        $user = $user->getUser((object) $validatedData);
        $user->save();
        
        return response()->json('success', 200);
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
