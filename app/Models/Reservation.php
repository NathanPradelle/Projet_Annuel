<?php

namespace App\Models;

use App\Events\Reservation as EventsReservation;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'start_time',
        'end_time',
        'guestCount',
        'price',
        'status',
        'comment',
        'content'
    ];

    protected $dispatchesEvents = [
        'created' => EventsReservation::class,
    ];

    public function user() : BelongsTo{
        return $this->belongsTo(User::class, 'user_id');
    }

    public function apartment() : BelongsTo{
        return $this->belongsTo(Apartment::class, 'apartment_id');
    }
}
