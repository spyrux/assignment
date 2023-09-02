<?php

use Illuminate\Support\Facades\Route;
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

Route::get('/', function () {
    return view('welcome');
});

 /**
 * API for getting all players data
 *
 */
Route::get('/players', [PlayerController::class, 'index'])->name('index');

 /**
 * API for creating player 
 *
 */

Route::post('/players', [PlayerController::class, 'create'])->name('create');

 /**
 * API for viewing a single player's data 
 *
 */

Route::get('/players/{id}', [PlayerController::class, 'view'])->name('view');

 /**
 * API for viewing a single player's data 
 *
 */
Route::delete('/players/{id}', [PlayerController::class, 'delete'])->name('delete');

 /**
 * API for viewing a single player's data 
 *
 */
Route::put('/players/{id}/increment', [PlayerController::class, 'incrementPoints'])->name('incrementPoint');


