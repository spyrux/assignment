<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;

    public $table = 'player';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'age',
        'address',
    ];
    /**
     * Default to 0 points when creating a new player.
     *
     * @var array<int, string>
     */
    protected $attributes = [
        'points' => 0,
    ];


}
