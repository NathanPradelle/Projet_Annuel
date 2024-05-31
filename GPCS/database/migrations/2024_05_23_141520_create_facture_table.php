<?php

use App\Models\User;
use App\Models\Apartement;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('facture', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('apartments_id')->references('id')->on('apartments');
            $table->foreignId('client_id')->references('id')->on('users');
            $table->timestamp('date_reservation_start');
            $table->timestamp('date_reservation_end');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('facture');
    }
};
