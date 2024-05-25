<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedInteger('profile_in_use')->nullable();
        });

        DB::statement("
            UPDATE users
            SET profile_in_use = (
                SELECT profile
                FROM user_profiles
                WHERE user_profiles.user = users.id
                LIMIT 1
            )
        ");

        Schema::table('users', function (Blueprint $table) {
            $table->unsignedInteger('profile_in_use')->nullable(false)->change();
            $table->foreign('profile_in_use')->references('id')->on('profile');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('profile_in_use');
        });
    }
};

