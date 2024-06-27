<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ban extends Model
{
    protected $table = 'ban';
    
    public function user(){
        return $this->belongsTo(User::class , '','id');
    }
}
