<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ApartmentImage extends Model
{
    use HasFactory;

    protected $table = 'apartment_images';

    protected $fillable = [
        'image'
    ];

    public function apartment() : BelongsTo {
        return $this->belongsTo(Apartment::class);
    }
}
