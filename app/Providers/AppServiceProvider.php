<?php

namespace App\Providers;

use App\Services\EpubParser;
use App\Services\HTMLDocumentParserService;
use App\Services\UploadImageService;
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
            return new EpubParser(
                $app->make(HTMLDocumentParserService::class),
                $app->make(UploadImageService::class),
            );
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
