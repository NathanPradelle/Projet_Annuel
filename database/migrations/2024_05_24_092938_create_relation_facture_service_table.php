<?php

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
        Schema::create('relation_facture_service', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('facture_id')->references('id')->on('facture');
            $table->foreignId('services_id')->references('id')->on('apartments');
            $table->timestamp('date_reservation');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relation_facture_service');
    }
};
