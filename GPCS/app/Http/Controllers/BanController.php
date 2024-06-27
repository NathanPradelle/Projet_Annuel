<?php

namespace App\Http\Controllers;

use App\Models\Ban;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BanController extends Controller
{
    public function addban(Request $request, int $id){
        //dd($request,$request['user_id'],$request['date_start'],$request['date_end'],$request['raison']);
        //dd($request,$id);
        $ban = new ban();
        $ban->user_id = $request['user_id'];
        $ban->date_start=$request['date_start'];
        $ban->date_end=$request['date_end'];
        $ban->raison=$request['raison'];
        //dd($ban);
        dd($ban->save());
    }

    public function banlist(Request $request,int $id){
        $ban = Ban::where('user_id','=',$id)->get();
        //dd($ban,$id);
        return $ban;
    }
}
