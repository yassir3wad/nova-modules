<?php

namespace Yassir3wad\NovaModules;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;
use Yassir3wad\NovaModules\Resources\Module;

class NovaModules extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('nova-modules', __DIR__ . '/../dist/js/tool.js');
        Nova::style('nova-modules', __DIR__ . '/../dist/css/tool.css');

        Nova::resources([
            Module::class
        ]);
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return \Illuminate\View\View
     */
    public function renderNavigation()
    {
        return view('nova-modules::navigation');
    }
}
