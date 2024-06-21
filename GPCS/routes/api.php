<?php

use App\Http\Controllers\UserController;
use App\Http\Middleware\CheckUserProfile;
use Illuminate\Support\Facades\Route;

require_once 'FilePaths.php';

Route::middleware('auth')->group(function () {
    Route::middleware(CheckUserProfile::class.':isManager')->group(function () {
        Route::post('/api/user/{id}', [UserController::class, 'update'])->name('api.user.update');
    });
});

require __DIR__.'/auth.php';
