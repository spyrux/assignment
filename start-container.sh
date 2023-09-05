#!/usr/bin/env bash

php artisan migrate --force

# Start Laravel development server
php artisan serve --host=0.0.0.0 --port=8000




if [ ! -d /.composer ]; then
    mkdir /.composer
fi

chmod -R ugo+rw /.composer

if [ $# -gt 0 ]; then
    exec gosu $WWWUSER "$@"
else
    exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf
fi
