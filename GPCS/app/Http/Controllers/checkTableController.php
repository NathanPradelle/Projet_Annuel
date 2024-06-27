<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Http\Request;

class checkTableController extends Controller
{
    public function checkTableBan()
    {
        if (Schema::hasTable('ban')) {
            dd('Table "ban" exists');
        } else {
            dd('Table "ban" does not exist');
        }
    }
}
