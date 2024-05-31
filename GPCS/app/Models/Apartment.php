<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Policies\ApartementPolicy;

class Apartment extends Model
{
    protected $policy = ApartementPolicy::class;

    protected $fillable = [
        'name',
        'address',
        'surface',
        'guestCount',
        'roomCount',
        'description',
        'price'
    ];

    protected $hidden = [
        'availabillity'
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function images(): HasMany {
        return $this->hasMany(ApartmentImage::class);
    }

    public function reservations(): HasMany {
        return $this->hasMany(Reservation::class);
    }

    public function tags(): BelongsToMany {
        return $this->belongsToMany(Tag::class,     'apartment_tags');
    }

    public function closedperiodes(): HasMany {
        return $this->hasMany(ClosedPeriod::class);
    }

    use HasFactory;
}
