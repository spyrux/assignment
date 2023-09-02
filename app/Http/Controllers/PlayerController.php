<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;


class PlayerController extends Controller
{

 /**
 * Function to obtain all players in order of descending score. 
 * Tries to find players and handles exceptions and errors.
 */
    public function index(){

        try{
            $players = Player::all();

            if($players->isEmpty()){
                return response()->json([
                    'message' => 'No players were found',
                ], 404);
            }

            return response()->json([
                'message' => 'Players found',
                'players' => $players,
                ], 200);

        }catch (Throwable $e){
            return response()->json([
                'message' => 'Failed to find players',
                'errors' => $e,
            ], 500);
        }
        
    }

 /**
 * Function to create a player with name, age, and address.
 * Validates request with the fields as requirements with proper formatting.
 * Tries to create the player and catches exceptions if there is an error.
 */

    public function create(Request $request){

        $request->validate([
            'name' => 'required|max:255',
            'age' => 'required|integer|min:0',
            'address' => 'required|regex:/^[A-Za-z0-9\s\-\.,#]+$/|max:255'
        ]);

        try{
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

/**
 * Function to find by id and increment a players points by 1 or -1.
 * Validates request amount.
 * Tries to increment the player's points and catches exceptions if there is an error.
 */

    public function incrementPoints(Request $request, $id){
        
        $request->validate([
            'amount' => 'required|integer|in:-1,1',
        ]);

        try{    
            $player = Player::findOrFail($id);
            $amount = (int)$request->input('amount');
            $points = $player->points;
            $player->points = $points + $amount;
            $player->save();
    
            return response()->json([
                'message' => 'Player points successfully incremented',
                'player' => $player,
            ], 201);

        }catch (ValidationException $e){
                return response()->json([
                    'message' => 'Amount is not allowed',
                    'errors' => $e,
                ], 422);

        } catch (Throwable $e){
            return response()->json([
                'message' => 'Player points increment unsucessful',
                'id' => $id,
                'errors' => $e,
            ], 500);
        }

    }

 /**
 * Function to find by id and delete a player
 * Tries to delete the player and catches exceptions if there is an error.
 */

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

 /**
 * Function to view the information of a player by id.
 * Tries to find the player and catches exceptions if there is an error.
 */

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
