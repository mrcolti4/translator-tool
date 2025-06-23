<?php

namespace App\Providers;

use App\Services\EpubParser;
use App\Services\HTMLDocumentParserService;
use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(EpubParser::class, function (Application $app) {
            return new EpubParser($app->make(HTMLDocumentParserService::class));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
