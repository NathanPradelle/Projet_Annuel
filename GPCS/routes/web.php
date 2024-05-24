<?php

use App\Http\Controllers\ApartmentController;
use App\Http\Controllers\ClosedPeriodController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FactureController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('users', UserController::class);

    Route::get('/admin', [UserController::class, 'indexAdmin'])->name('users.admin');
    Route::post('/admin', [UserController::class, 'StoreAdmin'])->name('admin.store');
    Route::get('/admin/create', [UserController::class, 'CreateAdmin'])->name('admin.create');

    Route::get('/customer', [UserController::class, 'indexCustomer'])->name('users.customer');
    Route::get('/customer/{user}', [UserController::class, 'RGPDCustomer'])->name('customer.rgpd');

    Route::resource('appart', ApartmentController::class)->except(['index']);
    Route::resource('tag', TagController::class);
    Route::get('/apartment', [ApartmentController::class, 'userIndex'])->name('apartment');
    Route::delete('/appartimage/{id}', [ApartmentController::class, 'destroyImg'])->name('appart.destroyImg');

    Route::get('/reservation', [ReservationController::class, 'index'])->name('reservation');
    Route::get('/reservation/{id}/edit', [ReservationController::class, 'edit'])->name('reservation.edit');
    Route::get('reservation/create/{appartement_id}', [ReservationController::class, 'create'])->name('reservation.create');
    Route::get('/reservations', [ReservationController::class, 'index'])->name('reservation.index');
    Route::post('/reservation', [ReservationController::class, 'store'])->name('reservation.store');
    Route::patch('/reservation/validate/{id}', [ReservationController::class, 'validate'])->name('reservation.validate');
    Route::patch('/reservation/refused/{id}', [ReservationController::class, 'refused'])->name('reservation.refused');
    Route::get('/reservation/{id}', [ReservationController::class, 'showAll'])->name('reservation.showAll');

    Route::prefix('appartement/{appartement}/edit')->group(function () {
        Route::get('/fermetures', [ClosedPeriodController::class, 'index'])->name('fermeture.index');
        Route::delete('/fermetures/{fermeture}', [ClosedPeriodController::class, 'destroy'])->name('fermeture.destroy');
        Route::patch('/fermetures/{fermeture}', [ClosedPeriodController::class, 'update'])->name('fermeture.update');
        Route::get('/fermetures/create', [ClosedPeriodController::class, 'create'])->name('fermeture.create');
        Route::post('/fermetures', [ClosedPeriodController::class, 'store'])->name('fermeture.store');
    });    
});

Route::get('/factureclient', [FactureController::class, 'client']); // need fix

require __DIR__.'/auth.php';
