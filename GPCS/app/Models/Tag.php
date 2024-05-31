<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function apartments(): BelongsToMany {
        return $this->belongsToMany(Apartment::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
