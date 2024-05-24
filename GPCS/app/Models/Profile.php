<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public function userProfiles()
    {
        return $this->hasMany(UserProfile::class, 'profileId', 'id');
    }
}
