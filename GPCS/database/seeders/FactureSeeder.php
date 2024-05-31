<?php

namespace Database\Seeders;

use App\Models\Facture;

use Carbon\Carbon;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FactureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('facture')->insert([
            'apartments_id' => 1,
            'client_id' => 1,
            'date_reservation_start' => Carbon::now()->timestamp,
            'date_reservation_end' => Carbon::now()->timestamp,
        ]);
    }
}
