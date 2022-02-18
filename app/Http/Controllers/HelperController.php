<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class HelperController extends Controller
{
    public function optimize()
    {
        Artisan::call('config:clear');
        //Artisan::call('config:cache');
        Artisan::call('route:clear');
        //Artisan::call('route:cache');
    }
}
