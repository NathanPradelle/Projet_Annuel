<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
    */
    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_in_use'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
    */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
    */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function apartments(): HasMany {
        return $this->hasMany(Apartment::class);
    }

    public function reservations(): HasMany {
        return $this->hasMany(Reservation::class);
    }

    public function tags():HasMany {
        return $this->hasMany(Tag::class);
    }

    public function userProfiles() {
        return $this->hasMany(UserProfile::class, 'user', 'id');
    }

    public function profileInUse() {
        return $this->belongsTo(Profile::class, 'profile_in_use', 'id');
    }

    /// <summary>
    /// Fonction to set user to return
    /// </summary>
    /// <return> a formatted user </return>
    public function formatUser(User $user)
    {
        $user = [
            'id' => $user?->id,
            'name' => $user?->name,
            'email' => $user?->email,
            'profiles' => $user?->userProfiles->map(function ($userProfile) {
                return ['id' => $userProfile->profile];
            })->toArray(),
            'profileInUse' => $user?->profile_in_use,
        ];

        return $user;
    }
}
