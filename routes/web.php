<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

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
});

// Rutas sistema despues de loggear


Route::get('/products', [App\Http\Controllers\ProductController::class, 'index'])
->middleware(['auth', 'verified'])->name('index');

Route::post('/products', [App\Http\Controllers\ProductController::class, 'store'])
->middleware(['auth', 'verified'])->name('products.store');

Route::put('/products/{product}', [App\Http\Controllers\ProductController::class, 'update'])
->middleware(['auth', 'verified'])->name('products.update');

Route::delete('/products/{product}', [App\Http\Controllers\ProductController::class, 'destroy'])
->middleware(['auth', 'verified'])->name('products.destroy');


Route::get('/categories', App\Http\Controllers\CategoryController::class)
->middleware(['auth', 'verified'])->name('categories');

Route::get('/users', App\Http\Controllers\UserController::class)
->middleware(['auth', 'verified'])->name('users');



Route::get('/tablero', function () {
    return Inertia::render('Tablero');
})->middleware(['auth', 'verified'])->name('tablero');


Route::get('/creators', function () {
    return Inertia::render('Creators');
})->middleware(['auth', 'verified'])->name('creators');


require __DIR__.'/auth.php';
