<?php

namespace Tests\Feature;

use App\Models\Player;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PlayerControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndex()
    {
        $players = Player::factory()->count(5)->create();
        $response = $this->get('/players'); 
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'players' => [
                '*' => ['id', 'name', 'points', 'age', 'address']
            ]
        ]);
    }

    public function testView()
    {
        $player = Player::factory()->create();
        $response = $this->get("/players/{$player->id}");
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'player' => ['id', 'name', 'points', 'age', 'address']
        ]);
    }

    public function testCreate()
    {
        $data = [
            'name' => 'John',
            'age' => 25,
            'address' => '123 Main St',
            'points' => 10
        ];
        $response = $this->postJson('/players', $data);
        $response->assertStatus(201);
        $response->assertJsonStructure([
            'message',
            'player' => ['id', 'name', 'points', 'age', 'address']
        ]);
    }

    public function testIncrementPoints()
    {
        $player = Player::factory()->create();
        $data = [
            'amount' => 1
        ];
        $response = $this->putJson("/players/{$player->id}/increment", $data);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'message',
            'player' => ['id', 'name', 'points', 'age', 'address']
        ]);
    }

    public function testDecrementPoints()
    {
        $player = Player::factory()->create();
        $data = [
            'amount' => -1
        ];
        $response = $this->putJson("/players/{$player->id}/increment", $data);
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'message',
            'player' => ['id', 'name', 'points', 'age', 'address']
        ]);
    }

    public function testNotInRangeIncrementPointsFail()
    {
        $player = Player::factory()->create();
        $data = [
            'amount' => 3
        ];
        $response = $this->putJson("/players/{$player->id}/increment", $data);
        $response->assertStatus(422);
   
    }

    public function testDelete()
    {
        $player = Player::factory()->create();
        $response = $this->delete("/players/{$player->id}");
        $response->assertStatus(200);
        $response->assertJson([
            'message' => 'Player successfully deleted',
            'id' => $player->id
        ]);
    }
       /** @test */
    public function testPlayerNoAddressFail()
    {
        $response = $this->post('/create-player', [
            'name' => 'John',
            'age' => 25,
            'address' => '',
        ]);

        $response->assertStatus(422);
        $this->assertDatabaseMissing('player', [
            'name' => 'John',
            'age' => 25,
        ]);
    }

    public function testPlayerNoNameFail()
    {
        $response = $this->post('/create-player', [
            'name' => '',
            'age' => 25,
            'address' => '123 doe',
        ]);

        $response->assertStatus(422);
        $this->assertDatabaseMissing('player', [
            'name' => '',
            'age' => 25,
            'address' => '123 doe',
        ]);
    }

    public function testPlayerNoAgeFail()
    {
        $response = $this->post('/create-player', [
            'name' => 'John',
            'age' => '',
            'address' => '123 doe',
        ]);

        $response->assertStatus(422);
        $this->assertDatabaseMissing('player', [
            'name' => 'John',
            'age' => '',
            'address' => '123 doe',
        ]);
    }

    public function testPlayerNegativeAgeFail()
    {
        $response = $this->post('/create-player', [
            'name' => 'John',
            'age' => -1,
            'address' => '123 doe',
        ]);

        $response->assertStatus(422);
        $this->assertDatabaseMissing('player', [
            'name' => 'John',
            'age' => -1,
            'address' => '123 doe',
        ]);
    }
}