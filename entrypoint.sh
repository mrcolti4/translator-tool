#!/bin/bash

chown -R www-data:www-data /var/www
chmod -R 755 /var/www
chmod -R 775 /var/www/storage /var/www/bootstrap/cache

if [ ! -d "/var/www/vendor" ]; then
    echo "Installing Composer dependencies..."
    composer install --no-interaction --optimize-autoloader
fi

if [ ! -f "/var/www/.env" ]; then
    cp /var/www/.env.example /var/www/.env
    php artisan key:generate
fi

exec "$@"