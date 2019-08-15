<?php

namespace Yassir3wad\NovaModules;

use Illuminate\Support\ServiceProvider;

class ToolServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'nova-modules');


        $this->publishes([
            __DIR__ . '/../database/seeds/ModulesSeeder.php' => $this->app->databasePath() . "/seeds/ModulesSeeder.php",
        ], 'seeds');

        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
