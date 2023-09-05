<?php
namespace Tests\Unit;

use App\Models\Player;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PlayerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_player_can_be_created()
    {
        $player = Player::create([
            'name' => 'John',
            'age' => 25,
            'address' => '123 Elm Street',
        ]);

        $this->assertDatabaseHas('player', [
            'name' => 'John',
            'age' => 25,
            'address' => '123 Elm Street',
        ]);
    }

    

    /** @test */
    public function default_points_are_zero()
    {
        $player = Player::create([
            'name' => 'John',
            'age' => 25,
            'address' => '123 Elm Street',
        ]);

        $this->assertEquals(0, $player->points);
    }
}