<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
   protected $fillable = [
       'userId',
       'profileId',
   ];

    public function user()
    {
        return $this->belongsTo(User::class, 'userId', 'id');
    }

    public function profile()
    {
        return $this->belongsTo(Profile::class, 'profileId', 'id');
    }
}
