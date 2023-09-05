<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PlayerController;

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



Route::get('/', [PlayerController::class, 'index'])->name('player.index');

 /**
 * API for getting player form
 *
 */

Route::get('/playersForm', fn() => Inertia::render('CreatePlayer'))->name('player.create');

 /**
 * API for viewing a single player's data 
 *
 */

Route::get('/players/{id}', [PlayerController::class, 'view'])->name('player.view');

 /**
 * API for viewing a single player's data 
 *
 */
Route::delete('/players/{id}', [PlayerController::class, 'delete'])->name('player.delete');

 /**
 * API for viewing a single player's data 
 *
 */
Route::put('/players/{id}/increment', [PlayerController::class, 'incrementPoints'])->name('player.incrementPoint');

