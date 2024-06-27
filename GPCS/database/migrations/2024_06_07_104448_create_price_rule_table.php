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
        Schema::create('price_rule', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->timestamp('début_changement_prix');
            $table->integer('id_relation_provider_service');
            $table->integer('prix_defaut')->nullable();
            $table->integer('prix_semaine')->nullable();
            $table->integer('prix_weekend')->nullable();
            $table->integer('prix_ferie')->nullable();
            $table->integer('prix_ete')->nullable();
            $table->integer('prix_hiver')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('price_rule');
    }
};
