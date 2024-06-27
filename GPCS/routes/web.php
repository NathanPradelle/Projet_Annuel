<?php

use App\Http\Controllers\StripeController;
use App\Http\Controllers\ApartmentController;
use App\Http\Controllers\ClosedPeriodController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FactureController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TestController;
use App\Http\Middleware\CheckUserProfile;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

require_once 'FilePaths.php';

Route::get('/test', [TestController::class, 'test']);

Route::get('/', function () {
    return Inertia::render(FilePaths::WELCOME, [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render(FilePaths::DASHBOARD);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::post('/userProfile', [UserController::class, 'profileToUse'])->name('user.profileToUse');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('users', UserController::class);

    Route::get('/admin', [UserController::class, 'indexAdmin'])->name('users.admin');
    Route::post('/admin', [UserController::class, 'StoreAdmin'])->name('admin.store');
    Route::get('/admin/create', [UserController::class, 'CreateAdmin'])->name('admin.create');

    Route::middleware(CheckUserProfile::class.':isManager')->group(function () {
        Route::get('/profile/get', [ProfileController::class, 'get'])->name('profile.get');

        Route::get('/users', [UserController::class, 'indexCustomer'])->name('users');
        Route::get('/user/{id}', [UserController::class, 'user'])->name('user');
        Route::post('/user/{id}', [UserController::class, 'update'])->name('user.update');
        Route::post('/user/exclude', [UserController::class, 'RGPDCustomer'])->name('user.exclude');
    });
    
    Route::resource('apartment', ApartmentController::class);
    Route::delete('/appartimage/{id}', [ApartmentController::class, 'destroyImg'])->name('appart.destroyImg');

    Route::resource('tag', TagController::class);

    Route::get('/reservation', [ReservationController::class, 'index'])->name('reservation');
    Route::get('/reservation/{id}/edit', [ReservationController::class, 'edit'])->name('reservation.edit');
    Route::get('reservation/create/{apartment_id}', [ReservationController::class, 'create'])->name('reservation.create');
    Route::get('/reservations', [ReservationController::class, 'index'])->name('reservation.index');
    //Route::get('/reservation', [ReservationController::class, 'test'])->name('reservation.test'); //test
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
    Route::get('/payment',[PaymentController::class, 'payment']);
});

Route::get('/', [ApartmentController::class, 'list'])->name('apartment.list');

Route::get('/factureclient', [FactureController::class, 'client']); // need fix
Route::get('/create-payment-intent', [StripeController::class, 'createPaymentIntent']);



require __DIR__.'/auth.php';
