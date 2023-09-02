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
Route::get('/players', 'PlayerController@index');

 /**
 * API for creating player 
 *
 */

Route::post('/player', 'PlayerController@store');

 /**
 * API for viewing a single player's data 
 *
 */

Route::get('/players/{id}', 'PlayerController@view');

 /**
 * API for viewing a single player's data 
 *
 */
 Route::delete('/players/{id}', 'PlayerController@delete');


