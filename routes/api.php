<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PlayerController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
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
