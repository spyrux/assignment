Leaderboard with auto-reorientation and list animations in a docker container with ReactJS, TailwindCSS, Laravel, and MySQL.

Needs php composer to be installed.
Run 'composer require laravel/sail --dev' to require sail as a dependency.
Run 'php artisan sail:install' to install sail.
Then run './vendor/bin/sail up' to start the server.
On another terminal use 'sail npm install' to install frontend dependencies and 'sail npm run dev' to start the front-end.



If everything is working as intended you should be able to visit the site at http://localhost/

Here is what it should look like:

<img width="690" alt="image" src="https://github.com/spyrux/assignment/assets/37138564/37e46d29-f1d7-464a-9cd2-d9ee04132af4">

























Documenation for APIs

GET '/' returns the index with all players.
GET '/playersForm' returns a form for creating a player.
GET '/players/{id}' returns a form with the player with id.
POST '/api/players' sends form data to create a new player in database
DELETE '/api/players/{id}' deletes a player with specified id.
PUT '/players/{id}/increment' updates specified player's points by +/-1.

