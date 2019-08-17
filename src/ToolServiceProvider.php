<?php

namespace Yassir3wad\NovaModules;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;
use Yassir3wad\NovaModules\Models\Module;

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

    public static function eliminateResourcesAndTools()
    {
        if(!\Schema::hasTable("modules"))
            return;

        $toEliminate = Module::where("active", false)->pluck("class")->toArray();

        Nova::serving(function (ServingNova $event) use ($toEliminate) {
            Nova::$resources = array_filter(Nova::$resources, function ($resource) use ($toEliminate) {
                return !in_array($resource, $toEliminate);
            });

            Nova::$tools = array_filter(Nova::$tools, function ($tool) use ($toEliminate) {
                return !array_filter($toEliminate, function ($eliminate) use ($tool) {
                    return $tool instanceof $eliminate;
                });
            });
        });
    }
}
