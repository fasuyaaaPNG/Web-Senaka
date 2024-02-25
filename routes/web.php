<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PresensiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/presensi', function () {
    return view('presensi/presensi');
});

Route::post('/presensi/store', [PresensiController::class, 'store'])->name('presensi.store');
