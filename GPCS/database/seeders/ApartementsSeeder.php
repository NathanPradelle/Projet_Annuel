<?php

namespace Database\Seeders;

use App\Models\User;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApartementsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('apartments')->insert([
            'name' => "name",
            'address' => "address",
            'surface' => 10,
            'guestCount' => 10,
            'roomCount' => 1,
            'price' => 10000,
            'user_id' => 1
        ]);
    }
}
