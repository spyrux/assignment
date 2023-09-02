<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
class PlayerController extends Controller
{

 /**
 * Function to obtain all players in order of descending score. 
 *
 */
    public function index(){
        $players = Player::all();
        return ['players' => $players];
    }

 /**
 * Function to create a player with name, age, and address.
 * Validates request with the fields as requirements with proper formatting.
 * Tries to create the player and catches exceptions if there is an error.
 */

    public function create(Request $request){
        try{

            $request->validate([
                'name' => 'required|max:255',
                'age' => 'required|integer|min:0',
                'address' => 'required|regex:/^[A-Za-z0-9\s\-\.,#]+$/|max:255'
            ]);
    
            $player = Player::create($request->all());
    
    
            return response()->json([
                'message' => 'Player successfully created',
                'player' => $player,
            ], 201);

        }catch (ValidationException $e){
            return response()->json([
                'message' => 'Validation unsucessful',
                'errors' => $e,
            ], 422);

        }catch (Throwable $e){
            return response()->json([
                'message' => 'Player creation unsucessful',
                'errors' => $e,
            ], 500);
        }

    }

    public function delete($id){

        try{    
            $player = Player::findOrFail($id);
            $player->delete();
    
    
            return response()->json([
                'message' => 'Player successfully deleted',
                'id' => $id,
            ], 201);

        }catch (ModelNotFoundException $e){
            return response()->json([
                'message' => 'Player was not found',
                'id' => $id,
                'errors' => $e,
            ], 404);

        }catch (Throwable $e){
            return response()->json([
                'message' => 'Player deletion unsucessful',
                'id' => $id,
                'errors' => $e,
            ], 500);

    }
}
    public function view($id){

        try{    
            $player = Player::findOrFail($id);
    
    
            return response()->json([
                'message' => 'Player successfully found',
                'player' => $player,
            ], 201);

        }catch (ModelNotFoundException $e){
            return response()->json([
                'message' => 'Player was not found',
                'id' => $id,
                'errors' => $e,
            ], 404);

        }catch (Throwable $e){
            return response()->json([
                'message' => 'Player lookup unsucessful',
                'id' => $id,
                'errors' => $e,
            ], 500);
        }
    }
}
