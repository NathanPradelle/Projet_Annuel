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
       'user',
       'profile',
   ];

   public $timestamps = false;

    public function user() {
        return $this->belongsTo(User::class, 'user', 'id');
    }

    public function profile() {
        return $this->belongsTo(Profile::class, 'profile', 'id');
    }
}
